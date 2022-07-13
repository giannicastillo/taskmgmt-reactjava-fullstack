import React, { Component } from "react"
import { useState } from "react";
import TaskDataService from "../../api/tasks/TaskDataService.js";
import ServiceAuthentication from '../tasksmgmt/ServiceAuthentication.js'

class ListOfTasks extends Component {
    //the constructor is where the first component becomes initalized 
    constructor(props) {
        console.log('constructor')
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
                ],
                message: null
        }
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.refreshTask = this.refreshTask.bind(this)
    }

        updatedTasksClicked(id){
            this.props.navigate(`/tasks/${id}`)
            // /tasks/${id}
            
        }

        componentWillUnmount(){
            console.log('shouldComponentUpdate')

        }

        shouldComponentUpdate(nextProps, nextState){
            console.log('shouldComponentUpdate')
            console.log(nextProps)
            console.log(nextState)
            return true
        }

            //call immediately after the component is mounted
            //the process of putting the component on the browser is called mounting  
        componentDidMount(){
            console.log('componentDidMount')
                this.refreshTask();
                console.log(this.state)
            }

            refreshTask() {
                let user = ServiceAuthentication.getSignInUser()
                // let user = "Gianni"
                // console.log(user, "This is user here!!!!")
                TaskDataService.getAllTasks(user)
                    .then(
                        res  => {
                            console.log(res)
                            this.setState({task: res.data})
                        }
                    )
            }


            updateTask(id) {
                console.log('update' + id)
                this.props.navigate(`/tasks/${id}`)
                // let user = ServiceAuthentication.getSignInUser()
                // // console.log(id + " " + user)
                // TaskDataService.deleteTask(user, id)
                // .then(
                //     res => {
                //         this.setState({message:`Task # ${id} has been deleted!`})
                //         this.refreshTask()
                //     }
                // )
            }

            deleteTask(id) {
                let user = ServiceAuthentication.getSignInUser()
                // console.log(id + " " + user)
                TaskDataService.deleteTask(user, id)
                .then(
                    res => {
                        this.setState({message:`Task # ${id} has been deleted!`})
                        this.refreshTask()
                    }
                )
            }


        // onSubmit(values) {
        //     if (this.state.id === -1) {
        //         TaskDataService.createTask(user, task)
        //             .then(() => this.props.navigate('/task'))
        //     } else {
        //         TaskDataService.updateTask(user, this.state.id, task)
        //             .then(() => this.props.navigate('/task'))
        //     }
        // }

        

    render() {
        console.log('render')
        return (
            <div>
                <h2> Here is how you can stand out and land a job as a software engineer:</h2>
                {this.state.message && <div className="alert alert-secondary" >{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Action Item</th>
                                <th>Deadline</th>
                                <th>Action successfully completed?</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.task.map(
                                    task =>
                                        <tr key={task.id}>
                                            <td>{task.actionItem}</td>
                                            <td>{task.deadline.toString()}</td>
                                            <td>{task.completed.toString()}</td>
                                            <td><button className="btn btn-warning" onClick={()=> this.updateTask(task.id)}>Update</button></td>
                                            <td><button className="btn btn-danger" onClick={()=> this.deleteTask(task.id)}>Delete</button></td>
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