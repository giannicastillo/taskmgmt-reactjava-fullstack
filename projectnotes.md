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

