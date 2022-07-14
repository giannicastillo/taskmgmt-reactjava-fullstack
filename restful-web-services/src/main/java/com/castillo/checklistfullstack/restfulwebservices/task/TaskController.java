
package com.castillo.checklistfullstack.restfulwebservices.task;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController{
	
	@Autowired
	private TaskHardCodedService taskServ;
	private Task createdTask;
	
	@GetMapping("/users/{user}/tasks")
	public List<Task> getAllTasks(@PathVariable String user) {
		//Thread.sleep(3000); - this allows for the staLling when loading
		//so like that you will be able to see flow or lifecycle of the react code.
		return taskServ.findAll();
		
	}
	
	//GET ONE TASK 
	
	@GetMapping("/users/{user}/tasks/{id}")
	public Task getOneTask(@PathVariable String user, @PathVariable long id) {
		//Thread.sleep(3000); - this allows for the staLling when loading
		//so like that you will be able to see flow or lifecycle of the react code.
		return taskServ.findById(id);
		
	}
	
	
	//CREATE / POST  ONE TASK
	@PostMapping("/users/{user}/tasks")
	//other option - ResponseEntity<Task> updateTask
	public ResponseEntity <Void> updateOneTask(
			@PathVariable String user, @RequestBody Task task){
		
		//called the save method in order to equal createTask
		Task createdTask = taskServ.save(task);
		
		//
		//taking the current request path (created task), and appending/pushing "/{id}"
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTask.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
	
	
	
	//UPDATE / PUT ONE TASK 
	@PutMapping("/users/{user}/tasks/{id}")
	//other option - ResponseEntity<Task> updateOneTask
	public Task updateOneTask(
			@PathVariable String user, @PathVariable long id, @RequestBody Task task){
		Task taskUpdate = taskServ.save(task);
			return task;
			
			//when updating it will return a status of okay, with the content of the updated resource
//		return new ResponseEntity<Task>(task, HttpStatus.OK);
			
		
	}
	
	
	
	//DELETE 
	
	@DeleteMapping("/users/{user}/tasks/{id}")
	public ResponseEntity<Void> deleteTask(
			@PathVariable String user, @PathVariable long id){
		
		Task task = taskServ.deleteById(id);
		//We are deleting the delete service 
		//if the delete is successful, this will be returning 
		//back what is deleted 
		if(task!=null) {
			//the delete method typically returns no content 
			return ResponseEntity.noContent().build();
		}
		//if task is null then we will be showing as not found
		return ResponseEntity.notFound().build();
		
		
		
	}
	
} 