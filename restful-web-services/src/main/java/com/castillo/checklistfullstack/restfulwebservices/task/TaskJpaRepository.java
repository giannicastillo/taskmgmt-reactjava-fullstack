package com.castillo.checklistfullstack.restfulwebservices.task;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TaskJpaRepository extends JpaRepository <Task, Long>{
	
	//this will allow us to find tasks via the user(s)
	List<Task>findByUser(String user);



}
