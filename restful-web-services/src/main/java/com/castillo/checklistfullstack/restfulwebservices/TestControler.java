package com.castillo.checklistfullstack.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class TestControler {
	
	//use GET
	//use URI and route it to /hello-world
	
	
	
	@GetMapping(path="/hello-world")
	public String  helloWorld() {
		return "PASSED TEST-Hello world! ";
	}
	
	//we are going to create a hello world but with a bean 
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean  helloWorldBean() {
		return new HelloWorldBean("PASSED TEST-Hello world!");
	}
	
	///hello-world/path-variable/{name}
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean  helloWorldVariable(@PathVariable String name) {
		//use the path parameters to have whatever you tyoe in the link come up in the json
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}

}
