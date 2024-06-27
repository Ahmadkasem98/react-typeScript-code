import React, { useReducer } from "react";

type stateProps = {
  count: number;
};
type counterProps = {
  type: "increment" | "decrement";
  payload: number;
};
type resetProps = {
  type: "reset";
};
type actionProps = counterProps | resetProps;

const initialState = { count: 0 };
const reducer = (state: stateProps, action: actionProps) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count : {state.count}
      <br></br>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;
