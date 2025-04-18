import React, { useReducer } from "react";

function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "incre":
        return { count: state.count + 1 };
      case "decr":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>UseReducer</h1>

      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "incre" })}>
        Increment The Count
      </button>
      <button onClick={() => dispatch({ type: "decr" })}>
        Decrement The Count
      </button>
    </div>
  );
}

export default UseReducer;
