const validationRegister = (register) => {
    const errors = {}

    if(!register.name){
        errors.name = 'Required'
    }
    if(!register.email){
        errors.email = 'Required'
    }
    if(!register.password){
        errors.password = 'Required'
    }
    if(!register.typePassword){
        errors.typePassword = 'Required'
    }

    return errors
}

export default validationRegister;