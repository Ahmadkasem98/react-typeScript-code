import React from 'react'

type testProps = {
    name : string
    age: number
    isLoggin:boolean
}

export default function Test1(props : testProps) {
  return (
    <div>
        {props.isLoggin ?         
        <div>
            hello {props.name} your age is {props.age}
        </div>
        :
        <div>hello Guest</div>
        }
    </div>
  )
}
