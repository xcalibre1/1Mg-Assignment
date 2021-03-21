import {createContext} from 'react'
import {useState} from "react"
const context=createContext();

function ContextProvider(props){
  const [Edit,setEdit]=useState(false)
  const [Text,setText]=useState("")
  const [textArray,setTextArray]=useState([])
  const [textArraybackup,setTextArraybackup]=useState([])
  const [save,setSave]=useState();
  const [click,setClick]=useState(false)
  const [id,setId]=useState(textArray.length);
  const [date,setDate]=useState(new Date().toLocaleTimeString())
  const [searchText,setsearchText]=useState("")
  const handleButton=(text)=>{
    if(text.length!=0){
    let obj={}
    obj.param=text;
    obj.datefinal=new Date().toLocaleTimeString()
    obj.style="";
    let temporaryArray=[...textArray]
    temporaryArray[id]=obj
    setId(textArray.length);
    setTextArray(temporaryArray)
    setTextArraybackup(temporaryArray)
    setText("");
    setClick(false)}
  }  
  const handleText=(text)=>{
    setText(text);
  }
  const handleCard=(text,index)=>{
    // textArray[index].style="yellow";
    let modifiedStyle=JSON.parse(JSON.stringify(textArray))
    for(let i=0;i<modifiedStyle.length;i++){
      modifiedStyle[index].style="";
    }
    modifiedStyle[index].style="yellow";
    setTextArray(modifiedStyle)
    setId(index)
    handleText(text)
  }
  const handleDelete=()=>{
    if(id!=textArray.length){  
    let arr=[...textArray]
    let temporary=arr.filter((item,index)=>index!=id)
    setTextArray(temporary);
    setTextArraybackup(temporary)
    setText("");}
  }
  const handleSearch=(text)=>{
      if(text.length!=0){
        let arr=[...textArray]
        let temporary=arr.filter((item,index)=>item.param.includes(text))
        setTextArray(temporary);
      }
      else
        setTextArray(textArraybackup)
  }
  return(
    <context.Provider value={{
    Edit,
    setEdit,Text,handleText,textArray,setTextArray,handleButton,save,setSave,id,click,handleCard,handleDelete,date,handleSearch
    }}>
      {props.children}
    </context.Provider>
  )
}

export {ContextProvider,context}
