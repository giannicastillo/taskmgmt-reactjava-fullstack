package com.castillo.checklistfullstack.restfulwebservices;

public class HelloWorldBean {

	private String message;

	public HelloWorldBean(String message) {
		// TODO Auto-generated constructor stub
		this.message = message;
	}
//Getters and Setters 
	
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

//GENERATE TO STRING 
	
	
	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	

}
