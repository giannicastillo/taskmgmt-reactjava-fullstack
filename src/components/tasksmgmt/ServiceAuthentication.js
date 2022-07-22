import axios from "axios";


// export const authenticatedSignin = 'authenticatedSignin'


class ServiceAuthentication {

    executeServAuth(signin, password) {
        // we are using this get request to send an authorization header
        return axios.get('http://localhost:8080/basicauth', {
            // withCredentials:true
            headers: {
                authorization:this.createTokenForAuth(signin,password)
            }
        })
    }
    //while creating a basic token  
    createTokenForAuth(signin,password){
        return 'Basic ' + window.btoa(signin + ":" + password);
    }



    registerSuccessfulLogin(signin, password) {
        
        //let authHeader1 = 'Basic ' + window.btoa(signin + ":" + password);

        // console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedSignin', signin);
        this.setupAxiosInterceptors(this.createTokenForAuth(signin,password))
    }

    logout() {
        sessionStorage.removeItem('authenticatedSignin');
    }

    isSignInActive() {
        let signin = sessionStorage.getItem('authenticatedSignin'); //the mistake that originally happened here was that I had a capital I instead of a lowercase one
        if (signin === null){
            return false 
            }else{
                return true
            }
    }

    getSignInUser() {
        let user = sessionStorage.getItem('authenticatedSignin')
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token){

    // //     // let name = 'Gianni'
    // //     // let password = '123' 

    // //     // let authHeader1 = 'Basic ' + window.btoa(name + ":" + password);

    // //     //moved above to registerSuccessfulLogin


        axios.interceptors.request.use(
            //send an updated config as the output
            (config) => {
                //we will only want to do this only if a user is logged in. 
                //if user is not logged in, we do not want to add a header. 
                if(this.isSignInActive()){
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}


export default new ServiceAuthentication()