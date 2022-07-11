package com.castillo.checklistfullstack.restfulwebservices.task;

import java.util.Date;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class Task {
	@Id
	@GeneratedValue
	private long id;
	private String user;
	private String actionItem;
	private Date deadline;
	private boolean isCompleted;
	
	//EMPTY CONSTRUCTOR 
	public Task() {
		
	}
	
	// CONSTRUCTOR
	public Task(long id, String user, String actionItem, Date deadline, boolean isCompleted) {
		super();
		this.id = id;
		this.user = user;
		this.actionItem = actionItem;
		this.deadline = deadline;
		this.isCompleted = isCompleted;
	}

	// GETTERS AND SETTERS


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}


	public String getActionItem() {
		return actionItem;
	}

	public void setActionItem(String actionItem) {
		this.actionItem = actionItem;
	}

	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

}
