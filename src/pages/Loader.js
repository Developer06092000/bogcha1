import React, {useEffect, useState} from 'react'
import PulseLoader from "react-spinners/PacmanLoader";
import { Link } from 'react-router-dom';
import style from '../css/loader.module.css'
import Location from './Location';
export default function Loader() {

    
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
       
    }, [])
    return (
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
                <div className={style.loader}>
             <span></span>
             <span></span>
             <span></span>
                     </div></div>
    )
}
