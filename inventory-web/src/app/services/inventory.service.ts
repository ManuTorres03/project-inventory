import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InventoryBody} from "../classes/inventory-body";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getProductsByUser(id: string) : Observable<Object> {
    return this.http.get('http://localhost:8080/merchandise/list-by-user', { params: {id} })
  }

  updateProduct(body: InventoryBody) : Observable<Object> {
    return this.http.put('http://localhost:8080/merchandise/update-product', body);
  }

  saveProduct(body: InventoryBody) : Observable<Object> {
    return this.http.post('http://localhost:8080/merchandise/save-product', body);
  }

  deleteById(id: string) : Observable<Object> {
    return this.http.delete('http://localhost:8080/merchandise/delete-by-id?id=' + id);
  }
}
