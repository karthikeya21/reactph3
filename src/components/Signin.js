import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
function Signin() {
  let navigate=useNavigate()
  let params=useParams()
  let gotoTech=()=>{
    navigate("/technologies")
  }
  return (
    <div>Signin

      <button onClick={gotoTech}>to signup</button>
    </div>
  )
}

export default Signin