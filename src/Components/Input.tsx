import React from 'react'

type InputProps = {
    handleChange : (event : React.ChangeEvent<HTMLInputElement> , id : number) => void ;
    value : string ;
}

export default function Input({handleChange , value}: InputProps) {
  return (
    <div>
        <input type='text' onChange={(e) => handleChange(e,5)} value={value} />
    </div>
  )
}