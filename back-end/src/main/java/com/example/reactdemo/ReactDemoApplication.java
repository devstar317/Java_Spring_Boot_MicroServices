package com.example.reactdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.reactdemo")
public class ReactDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactDemoApplication.class, args);
	}

}
