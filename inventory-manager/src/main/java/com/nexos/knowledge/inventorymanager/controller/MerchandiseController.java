package com.nexos.knowledge.inventorymanager.controller;

import com.nexos.knowledge.inventorymanager.dto.InventoryBodyDTO;
import com.nexos.knowledge.inventorymanager.entities.Inventory;
import com.nexos.knowledge.inventorymanager.entities.repositories.InventoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/merchandise")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class MerchandiseController {

    @Autowired
    private InventoryRepository inventoryRepository;

    @PostMapping("/save-product")
    public ResponseEntity<?> addNewProduct(@RequestBody Inventory product) {
        inventoryRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/list-by-user")
    public List<Inventory> findAllProductsByUser(@RequestParam String id) {
        return inventoryRepository.findAllByAssociatedUser(id);
    }

    @GetMapping("/list-products")
    public List<Inventory> listProducts() {
        return inventoryRepository.findAll();
    }

    @PutMapping("/update-product")
    public ResponseEntity<?> updateProperties(@RequestBody Inventory productToUpdate) {
        try {
            Inventory oldProduct = inventoryRepository.findById(productToUpdate.getId()).orElseThrow();
            oldProduct.setProduct_name(productToUpdate.getProduct_name());
            oldProduct.setQuantity(productToUpdate.getQuantity());
            oldProduct.setEntry_date(productToUpdate.getEntry_date());
            oldProduct.setAssociated_user(productToUpdate.getAssociated_user());

            inventoryRepository.save(oldProduct);

            return new ResponseEntity<>(productToUpdate, HttpStatus.OK);

        } catch (Exception e) {
            log.info("Error encontrando producto para actualizar");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping("/delete-by-id")
    public ResponseEntity<?> deleteById(@RequestParam String id) {
        inventoryRepository.deleteById(Integer.valueOf(id));
        log.info("Producto elimienado con éxito");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
