import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2'
import axios from 'axios';
export default function Convertor(){
    const [chartData , setChartData]= useState({});


    const data=()=> {
       let empSal=[];
       let empAge=[]

        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then (res=>{
            console.log(res);
            for (const dataObj of res.data.data){
                empSal.push(parseInt(dataObj.employee_salary));
                empAge.push((dataObj.employee_name))
            }
        }).catch(err=>{
            console.warn(err)
        })
        setChartData({
            labels:empAge,
            datasets:[
                {
                label:'Employee salary as per age :',
                data:empSal,
        
                borderColor:['rgba(247,124,124,0.2)'],
                backgroundColor:['rgba(247,124,124,0.2)'],
                pointBackgroundColor:'rgba(247,124,124)', 
                pointBorderColor:'rgba(247,124,124)',
                  
            }
            ]
        })

    };
    useEffect(()=>{
        data();
    },[])

    return (
        <>
    
        <h1 className="text-center"> converted chart </h1>
        <div className="chart container d-flex">
        <Line data={chartData}/>
        </div>
            
        </>
    )
}