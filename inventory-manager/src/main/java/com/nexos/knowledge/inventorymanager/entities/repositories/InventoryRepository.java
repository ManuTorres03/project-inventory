package com.nexos.knowledge.inventorymanager.entities.repositories;

import com.nexos.knowledge.inventorymanager.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    @Query(value = "SELECT * FROM nexos.inventory WHERE associated_user = ?1", nativeQuery = true)
    List<Inventory> findAllByAssociatedUser(String id);
}
