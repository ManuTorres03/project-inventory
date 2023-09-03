package com.nexos.knowledge.inventorymanager.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(schema = "Nexos", name = "users")
@Data
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Integer age;

    private Integer role;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "America/Bogota")
    private Date joining_date;
}
