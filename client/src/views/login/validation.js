const validationLogin = (login) => {
    const errors = {}
    
    if(!login.email){
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(login.email)){
        errors.email = 'Invalid email format'
    }

    if(!login.password){
        errors.password = 'Required'
    }

    return errors
}

export default validationLogin;