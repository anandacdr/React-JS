import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    // Conditional return
    if (!user) return <div className='m-8 text-2xl bg-blue-700'>Please, Login at First.</div>

    return <div className='text-3xl bg-green-700'>Welcome! {user.username}</div>
}

export default Profile