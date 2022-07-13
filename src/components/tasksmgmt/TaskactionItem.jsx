import React, {Component} from "react";
import Dashboard from "./Dashboard";
import moment from 'moment'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import TaskDataService from "../../api/tasks/TaskDataService";
import ServiceAuthentication from "./ServiceAuthentication";


class TaskactionItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.params.id, 
            actionItem: '',
            deadline: moment(new Date()).format('YYYY-MM-DD')
        }

        //defining the functions 
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount(){
        let user = ServiceAuthentication.getSignInUser()
        TaskDataService.getOneTasks(user, this.state.id)
                .then(res => this.setState({
                    actionItem: res.data.actionItem,
                    deadline: moment(res.data.deadline).format('YYYY-MM-DD')
                }))
    }
    //This is a function that will return the errors back 
        validate(values){
            let errors = {}
            if(!values.actionItem){
                errors.actionItem = 'Enter Action Item'
            }else if (values.actionItem.length < 3){
                errors.actionItem = ' Action Item Must be a minimum of 3 characters. '
            }

            if(!moment(values.deadline).isValid()){
                errors.deadline = 'Invalid deadline'
            }
            return errors;
        }
        onSubmit(values) {
        //     let user = ServiceAuthentication.getSignInUser()
        //     let task = {
        //         id: this.state.id,
        //         actionItem: values.actionItem,
        //         deadline:values.deadline
        //     }

    //         if (this.state.id === -1) {
    //             TaskDataService.createTask(user, task)
    //                 .then(() => this.props.navigate('/tasks'))
    //         } else {
    //             TaskDataService.updateTask(user, this.state.id, task)
    //                 .then(() => this.props.navigate('/tasks'))
    //         }
            console.log(values);
        
    }



    render(){
        let actionItem = this.state.actionItem
        let deadline = this.state.deadline


        return (
            <div>
                <h1>Task Action Item: </h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            actionItem: actionItem,
                            deadline: deadline
                        }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false}
                        validateOnBlue={false}
                        //this helps make sure that the updated info gets sent back to the list 
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="actionItem" component="div" 
                                        className="alert alert-danger"/>
                                    <ErrorMessage name="deadline" component="div" 
                                        className="alert alert-danger"/>
                                    <fieldset className="form-group">
                                        <label>Action Item</label>
                                        <Field className="form-control" type="text" name= "actionItem"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>deadline</label>
                                        <Field className="form-control" type="date" name="deadline"/>
                                    </fieldset>
                                    <button className="btn btn-primary" type="submit"> Save </button>
                                </Form>
                            )
                        }
                    </Formik>
                    
                </div>
            </div>
        )
        // return <div>Task Action Item for ID #{this.props.params.id} </div>
            // refer back to 86 in order to try and fix ! 
    }

}




export default TaskactionItem