import React from "react";
import styles from './SignUp.module.css'
import {useState} from "react";
import {useSignUp} from "../../hooks/useSignUp";

export default function SignUp(){
    const [displayName, setDisplayName]= useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,isPending,error} =useSignUp()

    const handleSubmit = (e) =>{
        e.preventDefault();
        signup(email,password,displayName)
    }

    return(
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Signup</h2>
            <label>
                <span>Display name:</span>
                <input type={"text"}
                       onChange={(e)=>setDisplayName(e.target.value)}
                       value={displayName}
                />
            </label>
            <label>
                <span>Email:</span>
                <input type={"email"}
                       onChange={(e)=>setEmail(e.target.value)}
                       value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    type={"password"}
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {!isPending && <button className={"btn"}>Login </button>}
            {isPending && <button className={"btn"} disabled>  Loading... </button>}
            {error && <p>{error}</p> }
        </form>
    )
}