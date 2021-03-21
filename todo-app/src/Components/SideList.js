import React from "react"
import {Card} from "react-bootstrap"
import {useContext} from "react"
import {context} from "../MyContext"
function SideList({element,index}){
    const {Edit,setEdit,Text,handleText,textArray,setTextArray ,id,handleCard,date}=useContext(context);
    console.log(textArray)
    let elementArray=element.param.split(" ")
    return (
        <Card style={{ width: '22rem',height:'6rem',background:`${element.style}` }} onClick={()=>handleCard(element.param,index)}>
        <Card.Body>
            <Card.Title className="cardTitle">{elementArray[0]+" "+elementArray[1]}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{element.datefinal}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{`${elementArray[2]+" "+elementArray[3]+" "+elementArray[4]}...`}</Card.Subtitle>
        </Card.Body>
        
        </Card>
    )
}
export default SideList;