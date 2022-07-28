# Entry level software engineer task management system 

# Accessing the project
The front end of the app can be viewed on https://localhost:4200.  After you cd to project folder, run the command "npm start". The java back end can be viewed in json form on https://localhost:8080 after the running the application on Spring Boot.  

# About this project 

After graduating from bootcamp, many of us feel that "what now?" momment.  

We are advised on taking multiple actions in order to make ourselves marketable, and hit our personal goals.  However, there is not a dependable and established way to track it. This web application gives post graduate students the opportunity to track neccessary action items and deadlines.  Through consistently using this web application, the goal is to give the user tools necessary to track action items and deadlines that must be met in order to score their first software development job and excell in their careers.  


# Tools used to build this app
  - React.js
  - Node.js
  - Hibernate 
  - Formik
  - Moment
  - Bootstrap 
  - Java 8 
  - SpringToolSuite4 
  - Maven Dependencies 
  - MySQL plugin 
  - Postman 
  - Talend API Tester
  - JPA 
  - WebSecurityConfigurerAdapter (Spring Boot) 
  
  # Sign in
  
  The sign in is active with one user "Gianni" and password "123". Validations have also been included for when a user attempts signing in with an incorrect password.  
  
    
  ![Screen Shot 2022-07-22 at 12 19 55 PM](https://user-images.githubusercontent.com/66094112/180481754-287e1fb5-9947-4df9-9191-0df13e66dd8a.png)

![Screen Shot 2022-07-22 at 12 21 21 PM](https://user-images.githubusercontent.com/66094112/180482041-adcc146f-a4bd-4a4c-8966-929a369a23a6.png)

# Footer
  The links that are included in the footer include when clicked send the user to my linkedin and github profile as well as a pdf of my résumé.  
  
 # Dashboard 
 
 After sign in, the user is routed to a dashboard page that connects to a list of action Items as well as a "Sign Out" page once the user is done using the web application.  
 
 A Dashboard Message button is actively being worked on with the goal of being able to GET a message from a restful API on my Java backend.   
 

![Screen Shot 2022-07-22 at 12 41 56 PM](https://user-images.githubusercontent.com/66094112/180485489-0ec196a9-87da-40f1-975c-31befb983f76.png)


# List of Action Items 

The list displayed shows action items and their deadlines as well as if these items were completed (represented as true or false).

The list also has buttons added which give the user options to update, delete, or create a new Action Item.  

  - Update existing Item = yellow botton 
  - Delete existing Item = red Botton 
  - Create Action Item = + Action Item

![Screen Shot 2022-07-22 at 12 55 43 PM](https://user-images.githubusercontent.com/66094112/180487657-2bd7edc8-2a45-4b79-87d7-b368a76d7b37.png)


# Update Action Item 

  When clicking the yellow Update botton, the user is routed to a page where they are able to edit both the action Item and the date that the action item is due.  
  
  Please note "Learn about Docker" as an example. 
  
  ![Screen Shot 2022-07-22 at 1 00 33 PM](https://user-images.githubusercontent.com/66094112/180488506-3a0bc909-8c9d-4029-a1dc-8d497109d23f.png)
  
![Screen Shot 2022-07-22 at 1 02 33 PM](https://user-images.githubusercontent.com/66094112/180488823-ddc0539d-8a2e-4bd9-b809-7f46661ae52f.png)

![Screen Shot 2022-07-22 at 1 02 52 PM](https://user-images.githubusercontent.com/66094112/180488885-5a336771-d4b8-496b-9aeb-839e8049fcd0.png)


As you can see below, we were able to change both the action item as well as the date the action item was due! 

# Create Action Item 

  When clicking the "+ Action Item" button in the bottom of the list, the user is routed to a page where they are able to create a new item.  Once the save botton is clicked, you will be redirected back to the list with the new item displayed on the bottom. 

  ![Screen Shot 2022-07-22 at 1 08 49 PM](https://user-images.githubusercontent.com/66094112/180489811-eb6e1670-43e4-476a-818f-fb30993a0ce5.png)

![Screen Shot 2022-07-22 at 1 09 06 PM](https://user-images.githubusercontent.com/66094112/180489869-5c9ff3ac-cb0d-446d-9e5f-8532accdb523.png)

# Delete

The user is able to delete an item off of the list once the task is completed or has no use of being recorded.  

In this example, I delete the "I learned Docker" item. 

Take a look! 

![Screen Shot 2022-07-22 at 1 11 52 PM](https://user-images.githubusercontent.com/66094112/180490249-522d6054-c3e3-442b-a9a1-8abdd5a0b2a7.png)

![Screen Shot 2022-07-22 at 1 12 15 PM](https://user-images.githubusercontent.com/66094112/180490313-ba2ea896-66c3-429c-9959-8ed914343eb4.png)

# Basic Authentication feature (front-end persepective)

  Security is always a priority when developing a fullstack application.  In the event that an unlogged user is trying to access information that is meant for the signed in user by copying/pasting the link. The web application will redicect this unlogged user to sign into the app.  
  
  Here the unlogged user is looking to open a new tab and copy/paste the url.  
 
![Screen Shot 2022-07-22 at 1 18 22 PM](https://user-images.githubusercontent.com/66094112/180491243-b109f1ee-05bb-4396-b8ce-389305dc4075.png)

![Screen Shot 2022-07-22 at 1 18 43 PM](https://user-images.githubusercontent.com/66094112/180491302-7c02de30-f8ab-4173-966b-df525045ce80.png)


![Screen Shot 2022-07-22 at 1 20 13 PM](https://user-images.githubusercontent.com/66094112/180491533-25574574-0e28-4ddb-a0ff-561b048e2f99.png)

![Screen Shot 2022-07-22 at 1 20 37 PM](https://user-images.githubusercontent.com/66094112/180491591-39aa3418-8669-4adb-9556-e1be5b4fbf28.png)

# Challenges 
  - Fixing the RestfulAPI botton on dashboard page
  - app stops working after hard refresh 
  - I was not able to view the hibernate database through localhost while doing this project, either way i was still able to utilize the database in the web app and all changes in the web app are saving appropriately.  


  # Contact
  Gianni Castillo
  Email:gianni.castillo96@gmail.com
  Phone: 917-696-8589
  Linkedin: https://www.linkedin.com/in/giannicastillo
  Project Link: https://github.com/giannicastillo/taskmgmt-reactjava-fullstack


