import react from "react"
import {useContext} from "react"
import {context} from "../MyContext"
function TextBox({}){
    const {Edit,setEdit,Text,handleText,textArray,setTextArray,id,click}=useContext(context);
    const index=click?id:textArray.length;
    return (
        <textarea id="w3review" name="w3review" rows="20" cols="125" value={Text} onChange={(e)=>handleText(e.target.value)
        }></textarea>
    )
}
export  default TextBox;