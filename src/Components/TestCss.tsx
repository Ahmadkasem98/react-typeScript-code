import React from 'react'

type cssProps = {
    styles : React.CSSProperties
}

export default function TestCss(props : cssProps) {
  return (
    <div style={props.styles}>
      hello css 
    </div>
  )
}
