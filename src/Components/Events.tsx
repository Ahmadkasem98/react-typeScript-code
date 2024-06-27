import React from 'react'

type EventsProps = {
    handleClick : (e:React.MouseEvent<HTMLButtonElement> , id : number) => void;
}

function Events(props: EventsProps) {
  return (
    <div>
        <button onClick={(e) => props.handleClick(e,1)}>Click</button>
    </div>
  )
}

export default Events