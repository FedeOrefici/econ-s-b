const validationsContact = (message) => {
    const errors = {}
    if(!message.email){
        errors.email = 'Required'
    }
    if(!message.message){
        errors.message = 'Required'
    }
    return errors;
}

export default validationsContact;