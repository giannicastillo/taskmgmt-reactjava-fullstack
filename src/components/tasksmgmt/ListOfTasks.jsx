import React, { Component } from "react"
import { useState } from "react";
import TaskDataService from "../../api/tasks/TaskDataService";
import ServiceAuthentication from '../tasksmgmt/ServiceAuthentication'

class ListOfTasks extends Component {
    //the constructor is where the first component becomes initalized 
    constructor(props) {
        super(props)
        // const x = props.params.params.id
        // console.log(x, "This is x")
        this.state = {
            task:
                [
                    // { id: 1, ActionItem: 'Write Goals', Completed: true, Deadline: new Date() },
                    // { id: 2, ActionItem: 'Work Out', Completed: true, Deadline: new Date() },
                    // { id: 3, ActionItem: 'Practice Algorithms', Completed: true, Deadline: new Date() },
                    // { id: 4, ActionItem: 'Complete Gitub certification', Completed: false, Deadline: new Date() },
                ]
        }
    }

        updatedTasksClicked(id){
            this.props.navigate(`/tasks/${id}`);
            
        }

            //call immediately after the component is mounted 
        componentDidMount(){
            let user = ServiceAuthentication.getSignInUser()
            // let user = "Gianni"
            // console.log(user, "This is user here!!!!")
            TaskDataService.getAllTasks(user)
                .then(
                    res  => {
                        console.log(res);
                        this.setState({tasks: res.data})
                    }
                )
            }

        // onSubmit(values) {

        //     //OTHER CODE
        
        //     if (this.state.id === -1) {
        //         TodoDataService.createTodo(username, todo)
        //             .then(() => this.props.navigate('/todos')) //REACT-6
        //         //this.props.history.push('/todos')
        //     } else {
        //         TodoDataService.updateTodo(username, this.state.id, todo)
        //             .then(() => this.props.navigate('/todos'))//REACT-6
        //         //this.props.history.push('/todos')
        //     }
        // }
        

    render() {
        return (
            <div>
                <h2> Here is how you can stand out and land a job as a software engineer:</h2>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Action Item</th>
                                <th>Action successfully completed?</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.task.map(
                                    task =>
                                        <tr key={task.id}>
                                            <td>{task.ActionItem}</td>
                                            <td>{task.Completed}</td>
                                            <td>{task.Deadline}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListOfTasks