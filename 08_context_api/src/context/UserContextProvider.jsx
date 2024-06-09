import React from 'react'
import UserContext from './UserContext'


// make a method,
const userContextProvider = ({children}) => {
    // give a data
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default userContextProvider