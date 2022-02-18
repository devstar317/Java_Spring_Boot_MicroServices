package com.example.reactdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.reactdemo.domain.Client;
import com.example.reactdemo.repository.ClientRepository;

@Component
public class PersonService {
	@Autowired
	private ClientRepository clientRepository;
	
	@org.springframework.transaction.annotation.Transactional
    public Client updateClient(@PathVariable Long id, @RequestBody Client client) {
		System.out.println("Started Txn");
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        try {
        	Thread.sleep(20000);	
        }catch(Exception ex) {
        	ex.printStackTrace();
        }
        
        currentClient = clientRepository.save(client);
//        testExc();
        return currentClient;
    }
    
	@Transactional
	public List<Client> findAllClients(){
		List<Client> clients = clientRepository.findAll();
		 try {
	        	Thread.sleep(20000);	
	        }catch(Exception ex) {
	        	ex.printStackTrace();
	        }
		return clients;
	}
	
    private void testExc() {
        for (int i = 10; i < 20; i++) {
        	System.out.println("-->Test");
            clientRepository.save(new Client("Sajid"+i, "sajid@gmail.com"+i));
        }
    }
	
}
