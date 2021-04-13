import React,{useState,useEffect} from 'react'

import  "./StartingPage.css"
import {Link} from "react-router-dom";
import Img from "../assets/banner.svg"


function FirstPage() {
    const [option,setOption]=useState("");
    const [link,setLink]=useState('');
    useEffect(() => {
        switch(option){
            case "admin":
                setLink("admin")
                break;
            case "doctor":
                setLink("doctor")
                break;
            case "customer":
                setLink("customer_signIn")
                break;
            case "pharmacy":
                setLink("phrama/login")
                break;
        }
    }, [option])
    return (
        <div className="entryPage">
         <img src={Img} alt=" " />
            <h1>WELCOME</h1>
            <div className="content">
                <Link to={`/${link}`}><p>sign In as a ?</p></Link>
                <select className="select" onClick={(e)=>{setOption(e.target.value)}}>
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="customer">customer</option>
                    <option vlaue="pharmacy">pharmacy</option>
                </select>
            </div>
        </div>
    )
}

export default FirstPage