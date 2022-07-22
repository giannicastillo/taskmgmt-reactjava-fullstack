package com.castillo.checklistfullstack.restfulwebservices.task;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.Table;
import javax.persistence.Table;

//confirm that import details are correct 


@Entity
//@Table(name="tasks")
public class Task {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	//Is used to specify the mapped column for a persistent property or field. If no Column annotation is specified, the default values apply.
//    Example 1:
//
//    @Column(name="DESC", nullable=false, length=512)
//    public String getDescription() { return description; }
	
	@Column(name="user")
	private String user;
	
	@Column(name="action_Item")
	private String actionItem;
	
	@Column(name="deadline")
	private Date deadline;
	
	@Column(name="is_Completed")
	private boolean isCompleted;
	
	
	//EMPTY CONSTRUCTOR - just incase || when we need to create a new instance in our framework
	public Task() {
		
	}
	
//	protected Task() {
//		
//	}
//	
	// CONSTRUCTOR
	public Task(Long id, String user, String actionItem, Date deadline, boolean isCompleted) {
		super();
		this.id = id;
		this.user = user;
		this.actionItem = actionItem;
		this.deadline = deadline;
		this.isCompleted = isCompleted;
	}

	// GETTERS AND SETTERS

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task other = (Task) obj;
		if(id != other.id)
			return false;
		return true;
	}


	
	
	

}
