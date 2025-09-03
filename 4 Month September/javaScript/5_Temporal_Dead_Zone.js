// Temporal Dead Zone (TDZ)

{
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20;
  console.log(y); // Output: 20
}
