import axios from 'axios'

//if any other package will import it will get an import of this class 
class TestService {
    executeTest(){
        // console.log('API - testService successful!')
        return axios.get('http://localhost:8080/hello-world')
    }

    executeBeanTest(){
        // console.log('API - testService successful!')
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executePathVariableTest(user){
        // console.log('API - testService successful!')
        //the value of name is coming from the backend of Java 
        return axios.get(`http://localhost:8080/hello-world/path-variable/${user}`)
    }

}

export default new TestService()