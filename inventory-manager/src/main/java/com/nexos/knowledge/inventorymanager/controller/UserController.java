package com.nexos.knowledge.inventorymanager.controller;

import com.nexos.knowledge.inventorymanager.entities.Users;
import com.nexos.knowledge.inventorymanager.entities.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public ResponseEntity<?> saveUser(@RequestBody Users user) {
        userRepository.save(user);
        log.info("User saved successfully");
        return ResponseEntity.ok(user);
    }


    @GetMapping("/list")
    public List<Users> listUsers() {
        return userRepository.findAll();
    }
}
