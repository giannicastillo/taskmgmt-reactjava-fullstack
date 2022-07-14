import axios from 'axios'

class TaskDataService {
    getAllTasks(user){
        // console.log('API - testService successful!')
        return axios.get(`http://localhost:8080/users/${user}/tasks`);
    }

    getOneTasks(user, id){
        // console.log('API - testService successful!')
        return axios.get(`http://localhost:8080/users/${user}/tasks/${id}`);
    }

    //POST FUNCTION TO CREATE
    createTask(user, task){
        return axios.post(`http://localhost:8080/users/${user}/tasks`, task);
    }

    //PUT FUNCTION TO UPDATE
    updateTask(user,id, task){
        // console.log('API - testService successful!')
        return axios.put(`http://localhost:8080/users/${user}/tasks/${id}`, task);
    }

    deleteTask(user, id){
        // console.log('API - testService successful!')
        return axios.delete(`http://localhost:8080/users/${user}/tasks/${id}`);
    }

}

export default new TaskDataService()