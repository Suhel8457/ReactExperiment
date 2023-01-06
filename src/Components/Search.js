import React from "react";
import {useState,useEffect} from 'react';
import axios from "axios";
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "bootstrap";
function Search ()
{
 
    const [Loading, setLoading] = useState(false);
    const [Data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedValue, setSelectedValue] = useState([]);
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);}
    // var Data = require("./MOCK_DATA.json");

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


    return(

        <div>
            <input type="text" id="exampleFormControlInput1" onChange={(e)=>setSearch(e.target.value)}></input>
            <div className="form-control" style={{border:"0.5px solid gray",borderRadius:"3px", marginTop:"0.15px", padding:"0"}}>
            <div className="App">
            
    </div>
            {
                 Loading ? (<h1>Loading.......!</h1>) : (
                    Data.filter((item) => {
                        const searchTerm = search.toLowerCase();
                       
                        const fullName = item.name.toLowerCase();

                        return (
                            
                            searchTerm &&
                            fullName.startsWith(searchTerm)
                             &&fullName !== searchTerm
                        );
                    })).map((item) => 
                        <h6 key={item.id}>{item.name}</h6>)
            } 
            </div>
            
            </div>
            
             
             

    
       
    )
}
export default Search;