import React from 'react'

type Props = {
    children : string;
    name:string;
    age?:number | undefined;
}

const Heading = (props: Props) => {
  return (
    <>
    <div>{props.children}</div>
    <div>{props.name}</div>
    <div>{props.age}</div>
    </>
  )
}

export default Heading;