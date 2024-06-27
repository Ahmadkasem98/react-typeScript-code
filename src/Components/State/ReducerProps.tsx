import React, { useReducer } from 'react'

type stateProps ={
firstCounter:number
secondCounter:number
}

type firstActionProps = {
    type:'increment' | 'decrement' | 'increment2' | 'decrement2'
    value:number
}

type secondActionProps = {
    type:'reset'
}
type actionProps = firstActionProps | secondActionProps



const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state : stateProps,action : actionProps) => {
    switch(action.type){
        case 'increment':
            return {...state , firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state , firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return {...state , secondCounter : state.secondCounter + action.value}
        case 'decrement2':
            return {...state , secondCounter : state.secondCounter - action.value}
        case 'reset':
            return initialState
        default :
        return state
    }
}

export default function ReducerProps() {

    const [ count , dispatch] = useReducer(reducer , initialState)

  return (
    <div>
    <div>First Count - {count.firstCounter}</div>
    <div>Second Count - {count.secondCounter}</div>
    <button onClick={() => dispatch({type:'increment',value:1})}>increment</button>  
    <button onClick={() => dispatch({type:'decrement',value:1})}>decrement</button>  
    <button onClick={() => dispatch({type:'increment2',value:2})}>increment second</button>  
    <button onClick={() => dispatch({type:'decrement2',value:2})}>decrement second</button>  
    <button onClick={() => dispatch({type:'reset'})}>reset</button>  
    </div>
  )
}
