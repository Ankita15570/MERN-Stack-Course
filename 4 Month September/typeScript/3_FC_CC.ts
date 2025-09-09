// difference between React js functional components and class components.

// Functional Components:

// Defined as JavaScript functions.
// Use plain functions or arrow functions, returning JSX.
// Simpler and more concise.
// Use the useState Hook (introduced in React 16.8) to manage state.
// More straightforward for simple state needs.
// Use Hooks like useEffect to handle side effects and lifecycle-like behavior (e.g., mounting, updating, unmounting).
// More flexible and reusable
// Generally lighter and faster due to less overhead (no this binding, no class instantiation).
// Optimized for modern React with Hooks.
// No this keyword, as they are plain JavaScript functions.
// Avoids binding issues.
//Example -

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0); // Initialize state

//   return (
//     <div>
//       <h1>Functional Component Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter;
// ________________________________________________________________________________________________________________________

// Class Components:

// Defined as ES6 classes extending React.Component.
// Require a render() method to return JSX.
// More verbose.
// Use this.state and this.setState() for state management.
// More boilerplate code.
// Use built-in lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
// More rigid structure.
// Slightly heavier due to class instantiation and lifecycle method overhead.
// May require binding methods to this, which adds complexity.
// Use this to access state, props, and methods.
// Requires binding event handlers in the constructor or using arrow functions to avoid this issues.
//Example -

// import React from 'react';

// class Counter extends React.Component {
//   state = { count: 0 }; // Initialize state

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Class Component Counter: {this.state.count}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;
// ______________________________________________________________________________________________________________

// ______________________________________________________________________________________________________________
// Feature  	      |    Functional Components              |          Class Components
// -----------------------------------------------------------------------------------------------------------
// Syntax	          |   Simple function, returns JSX	      |    ES6 class, render() method
// State	          |   useState Hook	                      |    this.state and this.setState
// Lifecycle	      |   useEffect Hook	                  |    Lifecycle methods (e.g., componentDidMount)
// Performance	      |   Lighter, less overhead	          |    Heavier, more boilerplate
// This Keyword	      |   Not used, no binding issues	      |    Uses this, requires binding
// Logic Reusability  |   Custom Hooks, composition	          |    HOCs, render props, inheritance
// Modern Preference  |	  Preferred, modern React standard	  |    Legacy, used in older codebases
// ___________________|_____________________________________ _|__________________________________________________
