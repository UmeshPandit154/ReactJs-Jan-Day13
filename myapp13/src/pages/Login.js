import React, { useState } from 'react'

export default function Login() {
    //State
    // const [stateVariableName,setFunction] = useState(intialValue)
    //1. State Variables
    const [email,setEmail] = useState('admin@gmail.com')
    const [password,setPassword] = useState('admin')
    
   //2. Function definations
    let submit = () =>{
        console.log("Submitted");
    }
    //3. Return statements
    //Every function return something
      return (
        <main className="">
            <form className='col-6 offset-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={password} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
            </form>

        </main>
    )
}

