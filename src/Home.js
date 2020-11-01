import React from 'react';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
export default function Home(){
    return(
    <div className= "container">
        <h1 className="text-center">HOME PAGE</h1>
        <button className="btn-lg btn-primary text-white py-2 my-3"><a href="./user"><span className= "text-white">Users Page</span></a></button>
        <ReactNotification />
        <Note />
    </div>

    )

}

function Note (){
    const handleOnClickDefault = ()=>{
        store.addNotification({
            title: "Wonderful!",
            message: "We Will Notify you Shortly ASAP!",
            type: "success",
            insert: "top",
            container: "center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          });
    }
    return(
        <div>
            <button className="btn-success btn-lg py-2" onClick={handleOnClickDefault}>
                Notify me
            </button>
        </div>
    )
}