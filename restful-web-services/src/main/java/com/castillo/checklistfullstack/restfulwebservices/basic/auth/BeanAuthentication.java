package com.castillo.checklistfullstack.restfulwebservices.basic.auth;

public class BeanAuthentication {
	
	private String message;

	public BeanAuthentication(String message) {
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
		return String.format("HelloWorldBean [message=%s]", message);
	}
	
	


}
