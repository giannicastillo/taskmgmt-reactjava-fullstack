import axios from 'axios'

class TaskDataService {
    getAllTasks(user){
        // console.log('API - testService successful!')
        return axios.get(`http://localhost:8080/users/${user}/tasks`);
    }


}

export default new TaskDataService()