import React from "react";

// Child Component
const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <div>{value}</div>;
});

function Reactmemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Hello");

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child value={value} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setValue(value === "Hello" ? "World" : "Hello")}>
        Toggle Value
      </button>
    </div>
  );
}

export default Reactmemo;/// agar child ek alag se components hota hai to hum export default m React.memo(components Name) ka use krte  ;
