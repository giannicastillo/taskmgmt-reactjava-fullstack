import axios from 'axios'
import {API_URL, JPA_API_URL} from '../tasks/Constant'

class TaskDataService {
    getAllTasks(user){
        // console.log('API - testService successful!')
        // return axios.get(`http://localhost:8080/users/${user}/tasks`);
        return axios.get(`${JPA_API_URL}/users/${user}/tasks`);
    }

    getOneTasks(user, id){
        // console.log('API - testService successful!')
        // return axios.get(`http://localhost:8080/users/${user}/tasks/${id}`);
        return axios.get(`${JPA_API_URL}/users/${user}/tasks/${id}`);
    }

    //POST FUNCTION TO CREATE
    createTask(user, task){
        // return axios.post(`http://localhost:8080/users/${user}/tasks`, task);
        // return axios.post(`${JPA_API_URL}/users/${user}/tasks`, task);
        return axios.post(`${API_URL}/users/${user}/tasks`, task);
    }

    //PUT FUNCTION TO UPDATE
    updateTask(user,id, task){
        // console.log('API - testService successful!')
        // return axios.put(`http://localhost:8080/users/${user}/tasks/${id}`, task);
        // return axios.put(`${JPA_API_URL}/users/${user}/tasks/${id}`, task);
        return axios.put(`${JPA_API_URL}/users/${user}/tasks/${id}`, task);
    }

    deleteTask(user, id){
        // console.log('API - testService successful!')
        // return axios.delete(`http://localhost:8080/users/${user}/tasks/${id}`);
        return axios.delete(`${JPA_API_URL}/users/${user}/tasks/${id}`);
    }

}

export default new TaskDataService()