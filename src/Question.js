import React,{useState} from 'react'
import { BsFillDashCircleFill,BsFillPlusCircleFill } from "react-icons/bs";

export default function SingleQuestion({title,info}){
    const[showInfo,setShowInfo] = useState(false);
    return(
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button classNname='btn' onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <BsFillPlusCircleFill />:<BsFillDashCircleFill/>}
                </button>
            </header>
            {showInfo &&  <p>{info}</p>}
            
        </article>
    )
}