package com.nexos.knowledge.inventorymanager.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(schema = "Nexos", name = "job")
@Data
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
}
