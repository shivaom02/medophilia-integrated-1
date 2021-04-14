import React,{useEffect, useState} from 'react'
import './doctorShowDet.css';
import AxiosInstance from "../../utilsClient/AxiosInstance";
import {Link,useHistory} from 'react-router-dom';

function Register_doctor() {
    const [token,setToken]=useState(localStorage.getItem("adminToken"));
    const [doctors,setDoc]=useState([]);
    const [pharamas,setPharma]=useState([]);
    const history=useHistory();
    const config={
        headers:{
            "AuthorizationAdmin":token
        }
    }
    useEffect( async () => {
  
        setToken(localStorage.getItem("adminToken"));
        const doc=await AxiosInstance.get("/doc/all_doc",config);
        const pharma=await AxiosInstance.get("/pharma/all_pharma",config);

        setDoc(doc.data.data);
        setPharma(pharma.data.data);
        console.log(pharma.data.data); 
    }, [])

    return (
        <div className="docShowDat">
           <div class="flex-container">
          <div class="flex-item-left">
              <div className="left_content">
                  
                  <p className="content">
                  
                     <Link to='/admin/registerDoctor'>register a doctor</Link>
                  
                   </p>
                   
                  <p className="content">
                      <Link to='/admin/registerPharmacy'>register a pharmacy</Link>
                  </p>
                  
                  <p className="content">Delete</p>
              </div>
          </div>
           <div class="flex-item-right">
               <p>
               <h3>Doctor registered</h3>
               {doctors.map((docIs,index)=>{
                    return(
                     <div>
                            {docIs.name}
                    </div>)
               })}
               </p>
               <p>
               <h3>Pharmacy</h3>
               {pharamas.map((pharmaIs,index)=>{
                    return(
                     <div>
                            {pharmaIs.name}
                    </div>)
               })}
               </p>
               {/* <p>prescription scanned</p> */}
           </div>
          </div> 
        </div>
    )
}

export default Register_doctor
