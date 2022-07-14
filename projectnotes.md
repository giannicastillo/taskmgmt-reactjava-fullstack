Class component 
    - A class component is not typically used now a days. (the old way)
    -A class component is a JavaScript class that extends React.Component which has a render method.

Function component
    -Inside a functional component, we are passing props as an argument of the function. 

Super
    - Super method must be called before using the constructor in Javascript 

The "this function needs to be used in order to call a function that is in the same component.  

Virtual DOM 
    - react presnetation of the DOM in memory which makes making changes easy 
    -React finds out what are the 2 things that are changing and then only changes those two things.  

A binding method in JS does not have to be used when you are using an ARROW FUNCTION 

How to include style in the ButtonFunction.jsx
<!-- - style={{fontSize: "60px",padding: "10px 20px"}} -->

{this.props.by} - allows for the increments that we labeled in app.js to be shown.  

make sure that in the app.js expressions that you are surrounding the numbers with {}
<!-- <ButtonFunction by={1}></ButtonFunction> -->

can set a default value for the properties as well as check for the type of properties. 

//this acts as a default to make sure that the the button goes up in increments of 1 in App.js.

//this acts as a validator to make sure that the "by={}" in App.js is a number
<!-- ButtonFunction.propTypes = {
    by: PropTypes.number
} -->


We refactored the button components to show in the app.js one component that represents all buttons.  

We want to incrememnt the button from the first class

back ticks (``) allow for embedded expressions 

We want to completely remove the state from the child component 
remove unnecessary things that we are currently removing fro the project (remove/comment)

We will also want to call ALL methods presented inside the parent component 

Call the method of One ButtonFunction which is defined in the props.  

We will need to define an ADD ALL/ SUBTRACTALL METHOD method so like that the child functions can be executed through the parent.  
<!-- <button onClick={() => this.props.addOneMethod(this.props.by)} >+{this.props.by}</button>
<button onClick={() => this.props.subOneMethod(this.props.by)} >-{this.props.by}</button> -->

The only option that you have to define an event listner (ButtonFunction line 79-80) is through a function that includes the parameter. 

When starting the TaskMgmt jsx we first set up the login section (email,password)

When a value changes we wanted to change the state, we do that by using onChange.  

The value is what is being changed in the log in 

we update the state by using setState. 
need to pass an object in setState , 
object containing new value.  

When we are able to see the sign in bar working, they user field becomes a control field. 

We are adding validations to this project in order to show when credentials are correct or invalid. TaskMgmt (85-98, 106-107)

react-router-dom allows us to route from one component page to another 

Navigator (WithNavigation) was added in order to help with routing from Signin Page to Dashboard.
First the varibale SigninPageWithNavigation was definied we then edited tags on routes, then this.props.navigate(`/dashboard`) under clickingLogIn

To enable passing parameters to a component we need to use withParams.  We create a seperate function component so that we can decorate any component that needs parameters! (anything that is represented under /:user will be shown on the screen)

We are using a map function in order to repeat the same task multiple times using info that is on the list. 
    Example: <td>{task.id}</td> in map shows all IDs , <td>{task.ActionItem}</td> in map shows all ActionItems,etc.  

@import bootstrap link on bootstrapfile.css allowed the bootstrap header and footer style to be shown on all pages. 

You can track if a user has logged in through session. Storing user in session allows you to access a session Storage object for the current origin.

Data stored in localStorage has no expiration time.  Data stored in sessionStorage gets cleared when the page session ends.  


The values that we are modifying are populated data  keys into values 
We are comparing against the login form that we made earlier 

We also had to define the value fo the object as well.  

Validations allow us to make sure that information is not submitted without fill all neccessary items on the form

By making validation on Change and Blue (in Formik) false, the validation will only come up after user presses save

Best Practices of Web services: 
    Always think about the consumer first
    Have great documentation for ideas 
    Make the best use of Http and request methods (GET,POST,PUT,DELETE)
    Make sure a proper response status is being sent back 
            200-SUCCESS
            404-RESOURCE NOT FOUND 
            400-BAD REQUEST 
            201-CREATED 
            401-UNAUTHORIZED 
            500-SERVER ERROR 

    NO SECURE INFO IN URI
    USE PLURALS 
        -Prefer/users to/ user
        -Prefer/ users/ 1 to/ user/ 1 
    
    Use nouns for controllers - have a consistent approach for exceptions
    /search
    Put/gist/{id}/star
    DELETE /gist/{id}/star

    