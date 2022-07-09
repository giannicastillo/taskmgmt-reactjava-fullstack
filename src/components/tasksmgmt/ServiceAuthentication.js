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
        let signin = sessionStorage.getItem('authenticatedSignin')
        if (signin === null) return ''
        return signin
    }
}


export default new ServiceAuthentication()