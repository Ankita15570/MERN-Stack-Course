import React from "react";
import { useReducer } from "react";

const ExampleUseReducer = () => {
  const reducer = (currentValue, payload) => {
    console.log(currentValue, "Curren Value ==>");
    console.log(payload, "Payload ==>");

    if (payload.type === "add") {
      return currentValue + 5;
    }
    return currentValue;
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const handelAdd = () => {
    try {
      dispatch({ type: "add" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Use Reducer Hook</h1>
      <h2>Count : {count}</h2>
      <button onClick={handelAdd}>Add</button>
    </div>
  );
};

export default ExampleUseReducer;
