import React from 'react'

type test6Props = {
    onClick : (event:React.MouseEvent<HTMLButtonElement> , id:number) => void
}

export default function Test6(props : test6Props) {
  return (
    <div>
      <button onClick={(e) => props.onClick(e,1)}>Click</button>
    </div>
  )
}
