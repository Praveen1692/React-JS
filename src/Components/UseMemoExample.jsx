import React, { useEffect, useMemo, useState } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    console.log(dark);
  }, [dark]);

  const doubleNUmber = useMemo(()=>SlowFunction(number),[number]); // useMemo();



  const themeStyle={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  return (
    <div>
      <h1>UseMemoExample</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <h2 style={themeStyle}>Double NUmber:{doubleNUmber}</h2>
    </div>
  );
}

function SlowFunction(num) {
    console.log("Slow FUnction Call");
    for (let index = 0; index<10000000; index++) {
       
        
    }
    return num*2;
    

}
export default UseMemoExample;
