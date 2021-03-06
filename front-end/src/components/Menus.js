import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

/*
const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/Home" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/CreateKafkaTopic" action>Create Kafka Topic</ListGroupItem>
            <ListGroupItem tag="a" href="/ViewKafkaTopic " action>View Kafka Topic </ListGroupItem>
            <ListGroupItem tag="a" href="/ViewTopicDescription" action>View Topic Description</ListGroupItem>
            <ListGroupItem tag="a" href="/DeadLetterQueue" action>Dead Letter Queue</ListGroupItem>
            <ListGroupItem tag="a" href="/AllMessages" action>All Messages</ListGroupItem>
        </ListGroup>

    );
}*/
function Menus() {
    const navigate = useNavigate();

    return (
        <>
            <Button 
                style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "50px"
                }}
                onClick={() => navigate("/Home")}>
                Home
            </Button><br /><br />
            <Button
                style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "50px"
                }}
                onClick={() => navigate("/CreateKafkaTopic")}>
                Create Kafka Topic
            </Button><br /><br />
            <Button
                style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "50px"
                }}
                onClick={() => navigate("/ViewKafkaTopic")}>
                ViewKafkaTopic
            </Button><br /><br />
            <Button
                style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "50px"
                }}
                onClick={() => navigate("/ViewTopicDescription")}>
                ViewTopicDescription
            </Button><br /><br />
            <Button
                style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "50px",
                }}
                onClick={() => navigate("/DeadLetterQueue")}>
                DeadLetterQueue
            </Button><br /><br />
            <Button
                style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "50px"
                }}
                onClick={() => navigate("/AllMessages")}>
                AllMessages
            </Button>
        </>
    );
}
export default Menus;