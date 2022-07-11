class ServiceAuthentication {
    registerSuccessfulLogin(signin, password) {
        // console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedSignin', signin);
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
}


export default new ServiceAuthentication()