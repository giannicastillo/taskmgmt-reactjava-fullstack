import React, { Component } from "react"

class ListOfTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.params.id,
            task:
                [
                    { id: 1, ActionItem: 'Write Goals', Completed: true, Deadline: new Date() },
                    { id: 2, ActionItem: 'Work Out', Completed: true, Deadline: new Date() },
                    { id: 3, ActionItem: 'Practice Algorithms', Completed: true, Deadline: new Date() },
                    { id: 4, ActionItem: 'Complete Gitub certification', Completed: false, Deadline: new Date() },
                ]
        }
    }

        updatedTasksClicked(id){
            this.props.navigate(`/tasks/${id}`);
            
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
                                            <td>{task.Completed.toString()}</td>
                                            <td>{task.Deadline.toString()}</td>
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