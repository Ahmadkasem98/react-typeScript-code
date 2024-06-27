import React from 'react'

type containerProps = {
   styles : React.CSSProperties;
   text:string;
}

function Container( props : containerProps) {
  return (
    <div style={props.styles}>{props.text}</div>
  )
}

export default Container