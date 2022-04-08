import React from "react"
export default function Data(props){
    return(
        <>
        <div className="visit">
        <img src={`./images/${props.item.img}`} />
        <div className="place"><span className="state">{props.item.city}</span>
        <a href={props.item.link}>view on Google Maps</a> 
        <div className="title">{props.item.place}</div>
        <div className="detail">{props.item.detail}</div>   
        </div>
        </div>
        </>
        
    )
}