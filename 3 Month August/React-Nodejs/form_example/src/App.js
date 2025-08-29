import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExampleCustomHook from "./AllHooks/ExampleCustomHook";
import { useState } from "react";
import ExampleUseMemo from "./AllHooks/ExampleUseMemo";
import ExampleUseReducer from "./AllHooks/ExampleUseReducer";

function App() {
  const [showCustomHook, setshowCustomHook] = useState(false);
  const [showUseMemo, setshowUseMemo] = useState(false);
  const [showUseReducer, setshowUseReducer] = useState(false);

  const handelCustomHook = () => {
    try {
      setshowUseMemo(false);
      setshowCustomHook(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handelUseMemo = () => {
    try {
      setshowCustomHook(false);
      setshowUseMemo(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handelUseReducer = () => {
    try {
      setshowCustomHook(false);
      setshowUseMemo(false);
      setshowUseReducer(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-1 mx-2">
            <button className="btn btn-primary" onClick={handelCustomHook}>
              customHook
            </button>
          </div>
          <div className="col-md-1 mx-2">
            <button className="btn btn-primary" onClick={handelUseMemo}>
              useMemo
            </button>
          </div>
          <div className="col-md-1 mx-2">
            <button className="btn btn-primary" onClick={handelUseReducer}>
              useReducer
            </button>
          </div>
        </div>
      </div>
      {showCustomHook && <ExampleCustomHook />}
      {showUseMemo && <ExampleUseMemo />}
      {showUseReducer && <ExampleUseReducer />}
    </div>
  );
}

export default App;
