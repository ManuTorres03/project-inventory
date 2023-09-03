package com.nexos.knowledge.inventorymanager.dto;

import com.nexos.knowledge.inventorymanager.entities.Inventory;
import lombok.Data;

@Data
public class InventoryBodyDTO {

    private int idItemToReplace;

    private Inventory newInventory;
}
