import React, { useEffect, useState } from 'react'
import './components.css';


function Timer() {

    const[second,setSecond]=useState(0);
    const[minute,setMinute]=useState(0);
    let timerId;


    useEffect(()=>{
        console.log(second);

      timerId=  setInterval(()=>{
            setSecond( second=> second+1);
            console.log("Sec");
            
            console.log(second);
            
            if(second==59){
                setMinute(minute=>minute+1);
                setSecond(0);
            }

        },1000)
        return ()=>{
            clearInterval(timerId);
        }

    })
    const Restart=()=>{
        setMinute(0);
        setSecond(0);
    }
    const Stop=()=>{
        clearInterval(timerId);

    }
    const Resume=()=>{
        setSecond(second=>second+1);
        setMinute(minute);

    }


  return (
    <div className='timer'>
        <h1>Timer</h1>

        <div className='timer-card'>
            <h1>{minute < 10 ? '0'+ minute : minute}:{second<10 ? '0'+second:second}</h1>



        </div>

        <button onClick={Stop}>Stop</button>
        <button onClick={Resume}>Resume</button>
        <button onClick={Restart}>Reset</button>
    </div>
  )
}

export default Timer