package com.example.reactdemo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.reactdemo.domain.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}
