import React,{ useState } from 'react'

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const Calender = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div style={{marginLeft:'50vw',transform:'translateX(-50%)',display:'flex',justifyContent:'center',alignItems:'center',width:'50vw',height:'50vh'}}>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
    )
}

export default Calender
