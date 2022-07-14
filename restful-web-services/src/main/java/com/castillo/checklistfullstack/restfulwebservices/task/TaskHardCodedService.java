package com.castillo.checklistfullstack.restfulwebservices.task;

import java.util.ArrayList;


import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

//SERVICE!!! 

@Service
public class TaskHardCodedService {
	
	private static List<Task> tasks = new ArrayList <>(); 
	private static int idCounter = 0;
	
	static {
		tasks.add(new Task(++idCounter, "Gianni", "Write down goals 3 times", new Date(), false));
		tasks.add(new Task(++idCounter, "Gianni", "Exercise", new Date(), false));
		tasks.add(new Task(++idCounter, "Gianni", "Practice Algorithms", new Date(), false));
	
	}
	
	public List<Task> findAll(){
			return tasks;
		}
	
	//save task
	public Task save(Task task){
		//-1 || 0 means that there is no current value present 
		//that there is a new task being created
		if(task.getId() == -1 || task.getId()==0) {
			task.setId(++idCounter);
			tasks.add(task);
		
		} else {
			//Delete old ID and add new ID after edit 
			//OLD task id deleted and new task is added 
			deleteById(task.getId());
			tasks.add(task);
		}
		
		return task;
	}
		
	public Task deleteById(long id) {
		Task task = findById(id);
		
		if(task==null) return null;
		
		if(tasks.remove(task)) {
			
		return task;
		
	}
		return null;
	}


	public Task findById(long id) {
		// TODO Auto-generated method stub
		for (Task task:tasks) {
			if(task.getId() == id) {
				return task;
			}
		}
		
		return null;
}
		

}
