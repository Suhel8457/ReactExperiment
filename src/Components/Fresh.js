import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
export default function Fresh()
{
   
    const [Loading, setLoading] = useState(false);///loading Data
    const [check,setCheck]=useState(false);
    const [Data, setData] = useState([]);//Storing Data Array from Api
    const [search,setSearch]=useState("");//Raw  Data Search
    const [found,setFound]=useState({name:"",id:null});//Making Into object Filtered Data
  //storing in Array
  const arr=[];
    const [store,setStore]=useState([]);

    const handleOutput=(item)=>{
        setSearch(item);

    }
    const handleSearch=(e)=>
    {
        setSearch(e.target.value);

    }
    let uniqueArray=[];
    let uniqueSet,jsonObject;
    const generateUnique=(books)=>{
        jsonObject = books.map(JSON.stringify);
      
        console.log(jsonObject +"json");
  
        uniqueSet = new Set(jsonObject);
        uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        console.log(uniqueArray+"set");
    }
    
   
 
   
   
    
    const handleFound=(received)=>{
   
        found.name=received;
        found.id=Math.floor(Math.random() * 10000);
        console.log(found)
        setFound({...found});
      
        console.log(found.name+"found");
        console.log(arr);
        console.log(store.filter((item,index)=>item.name!==received?received:"empty"))
        console.log(...store);
    

    }
    
    
    let {name, id} = found;
    function add() {
        setStore([
            ...store, {
                name,
                id
            }
        ])         
        console.log("done");
    }
   
    let delethandle =(i)=>{
        let newdataArr=[...store]
        newdataArr.splice(i,1)
        setStore(newdataArr)
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
    return(
        <form>
            {store.length<1?<h1> not</h1>:generateUnique(store)}
            
        
           {uniqueArray.length<1?<h1> not green </h1>:uniqueArray.map((item,index)=>{return(<div className="alert alert-warning alert-dismissale" role="alert" key={index}><strong>{item.name}  </strong><button className="form-control"onClick={()=>delethandle(index)}>&times;</button> </div>)})}
            
             
            
            <input type="search" name='in'  className="form-control"value={search} onChange={handleSearch}></input>
            <input type="button" value="add" style={{marginLeft:"10rem"}} onClick={add}></input>
            <div className="dropdown">
            {Loading ? <h6>Loading</h6> : Data.filter((item) => {
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
                onClick={()=>{handleFound(item.name) ;handleOutput(item.name)} }
                    className="dropdown-row "
                    key={item.id}
                >
                    {item.name}   
                </div>
                
                )) 
                } 
           
        </div>
           
        </form>

    )
}

