import React from 'react'

type test4Props = {
    children : string
}

export default function Test4(props : test4Props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
