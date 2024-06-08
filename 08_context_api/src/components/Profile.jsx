import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    // Conditional return
    if (!user) return <div>Please, Login at First.</div>

    return <div className='text-3xl bg-green-700'>Welcome! {user.username}</div>
}

export default Profile