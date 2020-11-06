import React from 'react';

export default function Login() {
  return (
    <>

      <div className="signIn container col-md-4">
        <div className=" text-center mb-5"> 
        <h1>LOGIN HERE</h1>
        </div>
        <form action="/home" method=" ">
          <div className="form-group">
            <label>Email address</label>
            <input type="email"className="form-control " id="inputEmail" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id ="inputPass" placeholder="Password"/>
            </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox"/>
                  <label>Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>

            </div>

    </>
  )

}