import React,{useState,useEffect} from 'react'
// import "./doctorPanelWelcome.css"
import "./doctorPescription.css"
import pesimg from './user.svg'
import confirmation from './confirm.png'
import addd from './added.png'

var currentTime = new Date();
var year = currentTime.getFullYear();
function Pescription() {
const [AddNow,setAddNow]=useState([1]);
const [Values,setValues]=useState([{medicine:"",fequency:"",timeLine:""}]);
const AddRow=()=>{
    setAddNow([...AddNow,1]);
}

const handleChangeMedicine=(value,index)=>{
    Values[index].medicine=value;
}
    return (
        <div>
        <div className="DPescription_1strow">
            <div className="pescriptiondp">
                <img src={pesimg} />
            </div>
            <div style={{display:'flex',flexDirection:'column'}} className="pescriptiondetails">
                <div>Patient Name :  Pinky Roy</div>
                <div>Age :  26</div>
                <div>Sex :                   Female</div>
                <div>Adress    :          Delhi-6</div>
            </div>
            <div style={{marginTop:'5%',fontWeight:'bolder'}} lassName="pescriptionid">
                 ID : Cx45Sa123
            </div>
        </div>
        <div className="DPescription_2ndrow">
            {/* <button style={{backgroundColor:'#3016CF',fontWeight:'bolder'}}>Add Resused Meicines</button> */}
            <button style={{backgroundColor:'#CF4216',fontWeight:'bolder'}}>Prescribe</button>
            <div className="DPdropdownbox">
                <div style={{fontWeight:'bolder'}}>Prescription Expires on</div>
                <div>
                <select name="day">
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
     </select>

                    <select id="month">
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
</select>
<select id="year">
    <option >{year}</option>
    <option >{year+1}</option>
    <option >{year+2}</option>
    <option >{year+3}</option>
</select>
</div>
            </div>
        </div>
        
        <div className="DPescription_3rdrow">
        {AddNow.map((item,index)=>{
            return( <div key={index} className="DpMedList">
                    <input placeholder="Medicine" onChange={(e)=>{handleChangeMedicine(e.target.value,index)}} /> 
                    <select id="Frequency" onClick={(e)=>{}}>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                    </select>
                    Times
                    <select  >
                        <option >Day</option>
                        <option >Week</option>
                        <option >Fort Night</option>
                        <option >Month</option>
                        </select>
                        For
                        <select id="Frequency" >
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                    </select>     
                    <select >
                        <option >Day</option>
                        <option >Week</option>
                        <option >Fort Night</option>
                        <option >Month</option>
                        </select>
                    </div>)
        })}
    </div>

        <div className="DPescription_4throw">
           <button onClick={()=>{AddRow()}}>
            <div style={{marginTop:'5px'}}><img src={addd} /></div>
            <div style={{fontSize:'1.6rem'}}>Add Medicine</div>
           </button>
        </div>
       <div  className="DPescription_5throw">
           <div style={{fontWeight:'bolder',marginBottom:'3%'}} className="heading">CLINICAL NOTE</div>
           <div className="body">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>
       </div>
       <div className="DPconfirmation">
           <img className="imageDP" src={confirmation} />
       </div>
        </div>
    )
}

export default Pescription;