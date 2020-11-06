import React from 'react';

export default function Dashboard(){
    return(
        <div className="dashboard  container text-center ">
            <div className="mb-3"> 
            <h1> WELCOME </h1>
            <span className="text-lg">Order Managment and Pressure Deviation Converter & Plotter</span>
            <br/>
            </div>

            <a href="./login" className="text-white"> <button className="btn-primary btn-lg" type="submit" >START </button></a>
        </div>
    )
}