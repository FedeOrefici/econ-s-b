const validationLogin = (login) => {
    const errors = {}
    
    if(!login.email){
        errors.email = 'Required'
    }

    if(!login.password){
        errors.password = 'Required'
    }

    return errors
}

export default validationLogin;