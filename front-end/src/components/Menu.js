import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
 
const Menus =() =>{
    return (
        <ListGroup >
            <Link 
            className = "list-group-item list-group-item-action"
              tag ="a" 
              to="/" 
              action color="info">
                Home
            </Link>
            <Link 
            className = "list-group-item list-group-item-action"
            tag ="a" 
            to="/Topics" 
            action color="danger">
                View Topics
            </Link>
            <Link 
            className = "list-group-item list-group-item-action"
            tag ="a" 
            to="/TopicDescription" 
            action color="primary">
                Topic Description
            </Link>
            <Link 
            className = "list-group-item list-group-item-action"
            tag ="a" 
            to="/Message" 
            action color="primary">
               Messsages
            </Link>
            <Link 
            className = "list-group-item list-group-item-action"
            tag ="a" 
            to="/AllMessages" 
            action color="primary">
                View Messsages
            </Link>
            <Link 
            className = "list-group-item list-group-item-action"
            tag ="a" 
            to="#!" 
            action color="secondary">
                About
            </Link>
        </ListGroup>
    ); 
}
export default Menus;