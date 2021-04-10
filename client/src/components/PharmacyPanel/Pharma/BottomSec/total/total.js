import React from "react";
import "./total.css"


const Total=()=>{
    return(
    <div className="total">
    <div className="msg"> <p>Total : <span>120</span></p>
    </div>
        <div className="control">
            <button>confirm purshes</button>
            <p>Go Back</p>
        </div>
    </div>)
}


export default Total;