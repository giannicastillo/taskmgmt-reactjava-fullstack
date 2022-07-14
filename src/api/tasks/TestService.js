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

        //we are creating and looking to send a basic authorizations
        let name = 'Gianni'
        let password = '123' 
        
        let authHeader1 = 'Basic ' + window.btoa(name + ":" + password);
        
        return axios.get(`http://localhost:8080/hello-world/path-variable/${user}`
        ,
        // when you are making a request, use this header!
            {
                headers:{
                    authorization: authHeader1
                }
            }
            `http://localhost:8080/basicauth`,
        );
    }

}

export default new TestService()