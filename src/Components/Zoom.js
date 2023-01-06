
import React from 'react'
import {useState} from 'react';
// import './App.css';

function Zoom() {
    const [inputarr,
        setInputarr] = useState([])

    const [inputdata,
        SetInputdata] = useState({name: "", rollNo: ""})

    function changehandle(e) {

        SetInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })

    }

    let {name, rollNo} = inputdata;
    function changhandle() {
        setInputarr([
            ...inputarr, {
                name,
                rollNo
            }
        ])

        console.log(inputdata, "input data what we Enter")
        SetInputdata({name: "", rollNo: ""})

    }
    let delethandle =(i)=>{
        let newdataArr=[...inputarr]
        newdataArr.splice(i,1)
        setInputarr(newdataArr)
    }
    function changhandle2() {
        console.log("Object store in array", inputarr)

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputdata)
        }).then((resp) => {
            resp.JSON()
                .then((result) => {
                    console.log("result", result)
                })
        })

    }
    return (
        <div className="App">
            <input
                type="text"
                autoComplete='off'
                name='name'
                value={inputdata.name}
                onChange={changehandle}
                placeholder="Enter Name"/>
            <input
                type="text"
                autoComplete='off'
                name='rollNo'
                value={inputdata.rollNo}
                onChange={changehandle}
                placeholder="Roll no"/>

            <button onClick={changhandle}>Add It
            </button><br/>
            <button onClick={changhandle2}>Chaeck Array in console
            </button><br/><br/>

            <table border={1} width="30%" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>Sr.No</td>
                        <th>Name </th>
                        <th>Roll No</th>
                        <th>Options</th>
                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={4}>NO data Enter yet !</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{info.name}</td>
                                <td>{info.rollNo}</td>
                                <td><button onClick={()=>delethandle(ind)}>Delete</button></td>
                            </tr>
                        )
                    })
}

                </tbody>
            </table>
        </div>
    );
}

export default Zoom;
