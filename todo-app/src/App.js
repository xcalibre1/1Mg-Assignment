import MyNavbar from "./Components/MyNavbar.js"
import SideList from "./Components/SideList"
import TextBox  from "./Components/TextBox"
import {useContext} from "react"
import {context} from "./MyContext"
import "./App.css"
export default function App() {
  const {Edit,setEdit,text,SetText,textArray,SetTextArray}=useContext(context);
  
  return (
  <div className="App">
    <MyNavbar />
    <div className="headDiv">
      <div>{textArray.map((item,index)=><SideList element={item} index={index}/>)}</div>
      <div><TextBox /></div>
    </div>
    
  </div>);
}
