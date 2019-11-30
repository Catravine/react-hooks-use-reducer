import React, { useReducer } from 'react';
import './App.css';

const initState = {
  count: 0
}

function reducerFunction(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducerFunction, initState);

  function plusOne() {
    dispatch({ type: "INCREMENT" });
  }

  function minusOne() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>useReducer Example</h2>
        <h3>Count: {state.count}</h3>
        <button onClick={plusOne}>Plus One</button>
        <button onClick={minusOne}>Minus One</button>
      </header>
    </div>
  );
}

export default App;
