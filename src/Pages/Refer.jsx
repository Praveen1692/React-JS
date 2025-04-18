import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Refer() {
  const Loc=useLocation();
  console.log(Loc);
  const Params=useParams();
  const id=Params.id;
  console.log(Params);
  console.log(id);
  
  
  
  return (
    <div>
      <h1>Data</h1>
     
    </div>
  )
}

export default Refer