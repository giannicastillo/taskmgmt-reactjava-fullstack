package com.castillo.checklistfullstack.restfulwebservices.task;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
//Tell spring Boot to allow request from localhost: 4200
@CrossOrigin(origins="http://localhost:4200", allowedHeaders ="*")
public class TaskResource {
	
	@Autowired
	private TaskHardCodedService taskService;
	
	@GetMapping(path="users/{user}/tasks")
	public List<Task> getAllTasks(@PathVariable String user){
		return taskService.findAll();
	}

}
