import React,{useState , useContext , useEffect} from "react";
import "./Table.css";

import AxiosInstance from '../../utilsClient/AxiosInstance';

import AuthContext from '../../context/userAuthContexts/authContext';

import { Link } from 'react-router-dom';

const Table=()=>{

    const { getUser , user } = useContext(AuthContext);

    const [name,setName] = useState('');

    const [ presciptions , setPresciptions ] = useState([]);

    useEffect(async()=>{

        if(user!=undefined){
            
            await getUser();

            console.log(user);

            setName(user.name);

            //all_prescription
            const res = await AxiosInstance.get('/user/all_prescription');

            console.log(res.data.data);

            setPresciptions(res.data.data);
        }
    },[])

    return (
        <>
            <div className="DoctorTable">

                    <div>
                        Patient Name : {name}
                    </div>
                    
                    <div className="Heading">
                        <p>Visted Doctor's List</p>
                    </div>
                    <div className="table">
                    <table>
                            <tr>
                                <th>SI NO</th>
                                <th>visited Time</th>
                                <th>Doctorname</th>
                                <th>Date</th>
                        
                            </tr>
                            { presciptions.length!==0 ?
                              
                               presciptions.map(( presciption , index)=>(
                                <tr>
                                
                                   <td>
                                      {/* <Link to={`/customer/${presciption._id}`} > */}
                                      <Link to={`/customer`} >
                                           {index}
                                       </Link>
                                    </td>

                                   <td>{presciption.vistedTime.split(',')[1]}</td>

                                   {/* <td><Link to={`/customer/doctor/${presciption.doc._id}`}> */}
                                    <td><Link to={`/customer/doctor`}>

                                            {presciption.doc.name}
                                   </Link></td>
                                   
                                   <td>{presciption.vistedTime.split(',')[0]}</td>
                            
                                 </tr>
                               ))
                            :
                             null
                            }
                        </table>
                    </div>
                    
                    </div>

        </>)
}

export default Table;