import React from 'react'
import './qrscanner.css'
import image from './img/QRCODE1.png'
function Qrsanner() {
    return (
        <div>
            <div class="QRcodeMain">
        <div class="left">
         <div><button class="PescriptionView">Pescription View</button></div>
         <div class="ClinicalNote">
             <div class="name">CLINICAL NOTE</div>
             <div class="note">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </div>
         </div>
        </div>
        <div class="right">

       {/* <image></image> */}
       <img src={image}/>
        </div>
    </div>
    <div class="QRcodeMainprint">
        <button class="print">PRINT</button>
        <button class="print">CONFIRM</button>
    </div>
        </div>
    )
}

export default Qrsanner
