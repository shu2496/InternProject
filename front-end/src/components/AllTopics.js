import React, { useState, useEffect } from "react";
import Topic from "./Topics";
import { toast } from "react-toastify";
import axios from 'axios';
import base_url from './../api/bootapi';


//function to call server:
const getAllTopicsFromServer=()=>{
    axios.get(`${base_url}/topics`).then(
        (response)=>{
            console.log(response.data);
            toast.success("Topics has been loaded");
            
        },
        (error)=>{
            console.log(error);
            toast.error("Something went wrong");
        }
    );
}; 

const AllTopics =()=>{
    useEffect(() => {
        document.title ="AllTopics";
        getAllTopicsFromServer(); //calling loading topic function

    }, []);

    const [topics, setTopics]=useState([]);

    return (
        <div>
            <h1> All Topics </h1>
            <p> List of All the topics </p>

            {
                topics.length>0? topics.map((item)=> <Topic key={item.id} topic = {item} />) : "No Topics"
            }
        </div>
    )
}

export default AllTopics;