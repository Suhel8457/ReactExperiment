import { useState,useEffect } from "react";
import axios from 'axios';


import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import "./Styles.css";
import bootstrap from "bootstrap";
import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { removePre } from "hooks";
import { Form } from "react-bootstrap";
 
const animatedComponents = makeAnimated();

// var data = require("./MOCK_DATA.json");

export default function Boot() {
const [todos,setTodos] =useState([]);


  const [selecedvalue,setSelectedValue]=useState("")
  const [Loading, setLoading] = useState(false);///loading Data

  const [Data, setData] = useState([]);//Storing Data Array from Api
  const [search, setSearch] = useState("");


  const handleclose=()=>{
  

  }

  useEffect(() => {
    const LoadData = async () => {
        setLoading(true);
        const response = await axios.get("https://gorest.co.in/public/v2/users");
        setData(response.data);
        console.log(response.data);
        setLoading(false);

    };
    LoadData();
}, []);
// const handleChange = (e) => {
//   setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);}

  const onChange = (event,item) => {
    setSearch(event.target.value);
  };
  // const print =()=>{console.log("ji")
  //   todos.map((todo,index)=><div>{todo}</div>)
  // }
  
const print =(searchTerm)=>{
    const newTodo=[...todos,searchTerm]
    setTodos(newTodo);
  // const onSearch = (searchTerm) => {
  //   setSearch(searchTerm)
  
    // our api to fetch the search result
    console.log("search ", searchTerm,todos,typeof(todos));
    Object.entries(todos).map(entry => {
      let key = entry[0];
      let value = entry[1];
      console.log( value);
  });
    
}
  


 
  return (
    <div className="App">             
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
             <strong  id="Math.random() * 10000">{search }</strong> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true" onClick={handleclose}>&times;</span>
                </button>
        </div>
        <button onClick={()=>todos.map((item,index)=>{<div key={index}>{item}</div>})}>set</button>
      <h1>Search</h1>
      
      <div className="search-container">
        <div className="search-inner ">
          <input type="text" className="form-control"  onChange={onChange}/>
          {/* <button  onClick={() => onSearch(search)} className="btn btn-primary"> Search </button> */}
        </div>
        <div className="dropdown">
           {Loading ? <h6>LOading</h6> : Data.filter((item) => {
              const searchTerm = search.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
             .slice(0, 10)
             .map((item) => (
              <div
               onClick={()=>{print(item.name);onchange(item.name)}}
                className="dropdown-row"
                key={item.id}
               >
                 {item.name}   
               </div>
               
             )) 
            } 
           
        </div>
      </div>
    </div>
  );
}


