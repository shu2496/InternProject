import React from 'react';
import './App.css';
import {Row,Col } from 'reactstrap';
import Header from './components/Header';
import AllMessages from './components/AllMessages';
import Home from './components/Home';
import CreateKafkaTopic from './components/CreateKafkaTopic';
import ViewKafkaTopic from './components/ViewKafkaTopic';
import ViewTopicDescription from './components/TopicDescription';
import DeadLetterQueue from './components/DeadLetterQueue';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginRegister from './components/LoginRegister';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  
  
  return (
    <div style={{backgroundColor: ''}}>
      
      <Header />
    
      
       <Row>
         {/* <Col md={4}>
           <Menus />
         </Col>
          */}
         <Col md={8}>
         <Router>
         <Routes>
         <Route path="" element={<LoginRegister/>}></Route>
          <Route path="/Registration" element={<Registration/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
      
         <Route path="/Home" element={<Home/>}></Route>
         <Route path="/CreateKafkaTopic" element={<CreateKafkaTopic/>}></Route>
         <Route path="/ViewKafkaTopic" element={<ViewKafkaTopic/>}></Route>
         <Route path="/ViewTopicDescription" element={<ViewTopicDescription/>}></Route>
         <Route path="/DeadLetterQueue" element={<DeadLetterQueue/>}></Route>
         <Route path="/AllMessages" element={<AllMessages/>}>
         </Route>

         </Routes>
         </Router>
         </Col>
       </Row>
       
       
       
    </div>
  );
}

export default App;
