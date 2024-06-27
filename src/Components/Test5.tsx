import React from 'react'

type test5Props = {
    children:React.ReactNode
}

export default function Test5(props : test5Props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
