import React, { useEffect, useState } from 'react'

function UseCallbackExample() {

  const [number, setNumber] = useState(""); 
  const [dark, setDark] = useState(false);
  useEffect(() => {
    console.log(dark);
  }, [dark]);

  const doubleNUmber = useMemo(()=>SlowFunction(number),[number]); // useMemo();

  const getItems=()=>{
    return [number,number+1,number+3]
  }



  const themeStyle={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }

  return (
    <div>
      <h1>useCallbackExample</h1>
      <h1>UseMemoExample</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <h2 style={themeStyle}>Double NUmber:{doubleNUmber}</h2>
    </div>
  )
}

export default UseCallbackExample;