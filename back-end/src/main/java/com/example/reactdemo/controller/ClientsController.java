package com.example.reactdemo.controller;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.reactdemo.domain.Client;
import com.example.reactdemo.repository.ClientRepository;
import com.example.reactdemo.service.PersonService;

@RestController
@RequestMapping("/clients")
@CrossOrigin
public class ClientsController {

	@Autowired
    private ClientRepository clientRepository;

	@Autowired
	private PersonService personService;
	
    public ClientsController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public List<Client> getClients() {
        return personService.findAllClients();
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable Long id) {
        return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Client client) {
        Client currentClient = personService.updateClient(id, client);
        return ResponseEntity.ok(currentClient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient(@PathVariable Long id) {
        clientRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    @PostConstruct
    public void dataInit() {
    	generateData();
    }
    
    private void generateData() {
        for (int i = 0; i < 10; i++) {
        	System.out.println("-->Test");
            clientRepository.save(new Client("Sajid"+i, "sajid@gmail.com"+i));
        }
    }

    	
}