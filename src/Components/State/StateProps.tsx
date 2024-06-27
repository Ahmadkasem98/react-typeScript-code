import React, { useState } from 'react'

type stateProps = {
    name:string
    email:string
    
}

export default function StateProps() {
    const [ user , setUser] = useState<stateProps | null>(null)

    const handleClick = () => {
        setUser({
            name:"ahmad",
            email:"ahmad@gmail.com"
        })
    }

  return (
    <div>
        <span>The name is {user?.name}</span>
        <span>The email is {user?.email}</span>
        <button onClick={handleClick}>click</button>
      
    </div>
  )
}
