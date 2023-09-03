import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../../services/inventory.service";
import {InventoryBody} from "../../classes/inventory-body";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  dropDownSettings: {};
  // @ts-ignore
  dataMultiSelect: Array = null;

  formEntry: FormGroup;
  formProduct: FormGroup;

  showWelcome: boolean;
  showList: boolean;
  productToUpdate: any;
  showTable: boolean;
  requestToUpdate: InventoryBody | undefined;
  valueToSearch: string;

  productList: any;
  productListTmp: any;

  constructor(public userService: UserService,
              private inventoryService: InventoryService) {
    this.showList = false;
    this.showTable = false;
    this.showWelcome = true;
    this.productList = [];
    this.productToUpdate = {};
    this.valueToSearch = '';
    this.productListTmp = [];

    this.dropDownSettings = {
      singleSelection: true,
      defaultOpen: false,
      idField: 'id',
      textField: 'name',
      closeDropDownOnSelection: true
    };

    this.formEntry = new FormGroup<any>({
      selectedUser: new FormControl([], Validators.required)
    });

    this.formProduct = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, this.numberValidator]),
      dateUpdated: new FormControl('',[ Validators.required]),
      user: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.dataMultiSelect = response;
    });

    this.formEntry.get('selectedUser')?.valueChanges.subscribe(value => {
      this.dataMultiSelect.forEach((data: any) => {
        if (value.length === 0) {
          this.userService.selectedUser = {};
        } else if (value[0].id === data.id) {
          this.userService.selectedUser = value[0];
        }
      });
    });
  }

  onClickUserSelected() {
    // @ts-ignore
    document.getElementById('card-welcome').style.opacity = '0';
    // @ts-ignore
    document.getElementById('card-welcome').style.transition = '0.5s';

    setTimeout(() => {
      this.showWelcome = false;
      this.showList = true;
    }, 500);

    this.inventoryService.getProductsByUser(this.userService.selectedUser.id).subscribe(response => {
      this.productList = response;
      this.productListTmp = response;
    })
  }

  onClickAddOrUpdateProduct(product?: any) : void {
    this.showWelcome = false;
    this.showTable = true;
    this.showList = false;

    if (product) {
      this.productToUpdate = product;
      this.formProduct.get('id')?.setValue(product.id);
      this.formProduct.get('name')?.setValue(product.product_name);
      this.formProduct.get('quantity')?.setValue(product.quantity);
      this.formProduct.get('dateUpdated')?.setValue(product.entry_date);
      this.formProduct.get('user')?.setValue(product.associated_user);
    } else {
      this.productToUpdate = {};
      this.formProduct.get('id')?.setValue('');
      this.formProduct.get('name')?.setValue('');
      this.formProduct.get('quantity')?.setValue('');
      this.formProduct.get('dateUpdated')?.setValue('');
      this.formProduct.get('user')?.setValue('');
    }
  }

  numberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (isNaN(value)) {
      return {notANumber: true};
    }
    return null;
  }

  saveOrUpdateInfoOfProduct() : void {

    const date: Date = new Date();

    this.requestToUpdate = {
      id: this.formProduct.get('id')?.value === '' ? null : this.formProduct.get('id')?.value,
      product_name: this.formProduct.get('name')?.value,
      quantity: this.formProduct.get('quantity')?.value,
      entry_date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      associated_user: this.formProduct.get('user')?.value === '' ? this.userService.selectedUser.id : this.formProduct.get('user')?.value
    };

    if (this.requestToUpdate.id === null) {
      this.inventoryService.saveProduct(this.requestToUpdate).subscribe(response => {

      })
    } else {
      this.inventoryService.updateProduct(this.requestToUpdate).subscribe(response => {

      });
    }

    this.showTable = false;
    this.productList = [];

    setTimeout(() => {
      this.inventoryService.getProductsByUser(this.userService.selectedUser.id).subscribe(response => {
        this.productList = response;
        this.productListTmp = response;

      })
    }, 500);

    this.showList = true;
  }

  deleteProduct(id: string): void {

    this.inventoryService.deleteById(id).subscribe(response => {
      console.log(response);
    });

    this.showTable = false;
    this.productList = [];

    setTimeout(() => {
      this.inventoryService.getProductsByUser(this.userService.selectedUser.id).subscribe(response => {
        this.productList = response;
        this.productListTmp = response;
      })
    }, 500);

    this.productListTmp = this.productList;

    this.showList = true;
  }

  searchProductsByName(e: any) : void {
    console.log(e);
    console.log(this.productList);

    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 32) {
      this.valueToSearch = this.valueToSearch + e.key;
    } else {
      if (e.key === 'Backspace') {
        this.valueToSearch = this.valueToSearch.substring(0, this.valueToSearch.length - 1);
      }
    }

    this.productList = this.productList.filter((item: any) => item.product_name.toLowerCase().includes(this.valueToSearch));

    if (this.valueToSearch.length === 0) {
      this.productList = this.productListTmp;
    }
    console.log(this.valueToSearch);
  }
}
