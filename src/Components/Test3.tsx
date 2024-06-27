import React from 'react'

type test3Props = {
 status:string
}

export default function Test3(props : test3Props) {
    let message
    if(props.status == "loading"){
        message = "...Loading"
    }
    else if(props.status == "success"){
        message = "...Success"
    }
    else{
        message = "...Error"
    }
  return (
    <div>
      The Message is - {message}
    </div>
  )
}
