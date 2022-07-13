package com.castillo.checklistfullstack.restfulwebservices.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@RequestMapping("/api")
//Tell spring Boot to allow request from localhost: 4200
@CrossOrigin(origins="http://localhost:4200", allowedHeaders ="*")
public class TestController {
	
	//use GET
	//use URI and route it to /hello-world
	
	
	
	@GetMapping(path="/hello-world")
	public String  helloWorld() {
		return "PASSED SpringBoot API TEST-Hello world! ";
	}
	
	//we are going to create a hello world but with a bean 
	@GetMapping(path="/hello-world-bean")
	public TestBean  helloWorldBean() {
		return new TestBean("PASSED SpringBoot API BEAN TEST-Hello world!");
	}
	
	///hello-world/path-variable/{name}
	@GetMapping(path="/hello-world/path-variable/{user}")
	public TestBean  helloWorldPathVariable(@PathVariable String user) {
		//the exception is the link that is connected to the errors 
//		throw new RuntimeException("SPRINGBOOT ERROR-something went wrong");
		//use the path parameters to have whatever you tyoe in the link come up in the json
		return new TestBean(String.format("Hello World, %s", user));
	}
	
	//GOING TO EVENTUALLY NEED THE ERR LINK

}
