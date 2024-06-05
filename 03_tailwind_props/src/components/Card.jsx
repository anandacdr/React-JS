import React from 'react'

function Card({username, btnText="visit me"}) {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 object-cover w-full h-full rounded-md"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute text-left bottom-4 left-4">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="inline-flex items-center mt-2 text-sm font-semibold text-white cursor-pointer">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card