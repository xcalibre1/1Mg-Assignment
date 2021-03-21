import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  NavDropdown,
  FormControl
} from "react-bootstrap";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveIcon from '@material-ui/icons/Save';
import {useContext} from "react"
import {context} from "../MyContext"
function MyNavbar() {
  const {Edit,setEdit,Text,setText,textArray,setTextArray,handleButton,handleDelete,handleSearch }=useContext(context);
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TODO-LIST</Navbar.Brand>
      <DeleteOutlinedIcon  className="m-auto" onClick={handleDelete}/>
      <EditOutlinedIcon className="m-auto" onClick={()=>handleButton(Text)}/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>handleSearch(e.target.value)}/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;
