import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const Login = () => {
    const [logged, setlogged] = useState(false)
    const {userName, setuserName} = useContext(UserContext)
    const log=()=>{
        if (!logged){
            setuserName("itay")
        }else{
            setuserName("--")
        }
        setlogged(!logged)

        
    }
    
  return (
    <div>Login
       <h1> {logged ? "logged":"not logged"} ,{userName}</h1>
        <button onClick={()=>log()}>Login</button>
    </div>
  )
}

export default Login