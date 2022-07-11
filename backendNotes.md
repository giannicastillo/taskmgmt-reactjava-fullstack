 Spring Boot Auto Configuration and Dispatcher Servlet (REVIEW AGAIN)
    What is a dispatcher servlet ? 
    Who is congfiguring dispatcher servlet? 
    What does dispatcher servlet do? 
    How does the HelloWorldBean object get converted to JSON? 
    Whose configuring the error mapping ? 

Axios is a promised based HTTP client for the browser and node.js 
Axios supports promise API 

The PROMISE object represents the eventual completion (of  failure) of an asynchronus operation, and its resulting value.  
    ex: asyncCallWithPromise()
    then (res => doWhat(res))
    catch (error => handleError(res))

We make a get request in order to get a piece of info from the backend and then present it to the client 

Some of the APIs that we are looking to establish in our back end 
    GET- Retrieve all Tasks for A User
        /users/{user_name}/tasks
    
    DELETE - Delete a Task of a User 
        /users/{user_name}/tasks/{task_id}
    
    PUT- EDIT/UPDATE a Task
        /users/{user_name}/tasks/{task_id}

    POST- Create a new Task
        /users/{user_name}/tasks/
