import {createContext, useEffect, useState} from "react";
import {bankApi} from "../constants/axios";

export type UsersContextType = {
    users: Array<any>;
    getUsers: () => void;
}

export const UsersContext = createContext<UsersContextType>({
    users: [],
    getUsers: () => {}
})

const UsersProvider = ({children}: any) => {
    const [users, setUsers] = useState<Array<any>>([])

    const getUsers = async () => {
        try {
            const response = await bankApi.get('members')

            console.log('response', response)

            if(response)
                setUsers(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UsersContext.Provider value={{users, getUsers}} >{children}</UsersContext.Provider>
    )

}

export default UsersProvider