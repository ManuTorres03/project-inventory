package com.nexos.knowledge.inventorymanager.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(schema = "Nexos", name = "inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String product_name;

    private Integer quantity;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "America/Bogota")
    private Date entry_date;

    private String associated_user;
}
