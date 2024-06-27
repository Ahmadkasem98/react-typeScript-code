import React from 'react'

type test2Props = {
    name : {
        first:string
        last: string
    }
    names: {
        first:string
        last:string
    }[]
}

export default function Test2(props:test2Props) {
  return (
    <div>
      <h2>{props.name.first} {props.name.last}</h2>
      {
        props.names.map((nam) => {
            return(
                <div key={nam.first}>{nam.first}{nam.last}</div>
            )
        })
      }
    </div>
  )
}
