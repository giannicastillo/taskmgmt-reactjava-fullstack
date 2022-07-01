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
