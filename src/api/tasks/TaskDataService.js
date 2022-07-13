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

    deleteTask(user, id){
        // console.log('API - testService successful!')
        return axios.delete(`http://localhost:8080/users/${user}/tasks/${id}`);
    }

    //POST FUNCTION TO CREATE 


    //PUT FUNCTION TO UPDATE 


}

export default new TaskDataService()