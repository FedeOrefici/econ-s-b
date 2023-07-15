import axios from 'axios'
import { createContext, useEffect, useState } from "react";


export const UsersContext = createContext()

const UserContextProvider = ({children}) => {

    const [users, setUsers] = useState()

    useEffect(() => {
        const endpoint = 'http://localhost:3000/api/users'
        const axiosData = async () => {
            const response = await axios.get(endpoint)
            setUsers(response.data)
        }
        axiosData()
    }, [])



    return (
        <UsersContext.Provider value={{users}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UserContextProvider;