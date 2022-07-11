package com.castillo.checklistfullstack.restfulwebservices.task;

import java.util.ArrayList;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class TaskHardCodedService {
	
	private static List<Task> tasks = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		tasks.add(new Task(++idCounter, "Gianni", "Write down goals", new Date(), false));
		tasks.add(new Task(++idCounter, "Gianni", "Exercise", new Date(), false));
		tasks.add(new Task(++idCounter, "Gianni", "Practice Algorithms", new Date(), false));
	
	}
	
	
	
	public List <Task> findAll(){
		return tasks;
	}
	
	

}