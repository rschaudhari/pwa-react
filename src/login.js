import React from 'react';

export default function Login(){
    return(
      <>
        <h1> LOGIN PAGE</h1>
        
        <div>
          <input  type="text" placeholder="username"></input>
          <input  type="text" placeholder="password"></input>
          <button type ="submit">Login</button>
        </div>
        <a href="/register"><span>New user? Sign up</span></a>
        <br>
        </br>
        <a href=" "><span>forget password</span></a>
      </>  
    )

}