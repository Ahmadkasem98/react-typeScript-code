import React from 'react'

type test7Props = {
    value:string
    handleChange : (event:React.ChangeEvent<HTMLInputElement>) => void

}

export default function Test7(props : test7Props) {
  return (
    <div>
      <input type='text' value={props.value} onChange={(e) => props.handleChange(e)} />
    </div>
  )
}
