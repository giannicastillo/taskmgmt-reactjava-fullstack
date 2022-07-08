class ServiceAuthentication {
    registerSuccessfulLogin(signin,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedSignin', signin);
    }

    logout(){
        sessionStorage.removeItem('authenticatedSignin');
    }

    isSignInActive() {
        let signin= sessionStorage.getItem('authenticatedSignIn'); //when signing in the console log comes back false, NEED HELP
        if(signin===null) return false
        return true 
    }
}

export default ServiceAuthentication()