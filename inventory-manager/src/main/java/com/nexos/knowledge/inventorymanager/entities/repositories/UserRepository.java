package com.nexos.knowledge.inventorymanager.entities.repositories;

import com.nexos.knowledge.inventorymanager.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
}
