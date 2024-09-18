import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/userDetailSlice";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () =>{
    // const navigate = useNavigate
    const navigate = useNavigate(); 

    const dispatch = useDispatch();

    const [users , setUser ] =useState({});  
    const getUserData = (e) =>{
        setUser({...users  , [e.target.name] :e.target.value})
        // console.log(users);
    };
    const handleSubmit=(e) =>{
        e.preventDefault()
        console.log("user..",users);
        dispatch(createUser(users));
        // navigate("/read");
        navigate("/read");

    };
    
    return(
        <div>
            <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" name="name" onChange={getUserData} />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputPassword1" name="email" onChange={getUserData}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Age</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="age" onChange={getUserData} />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="male" onChange={getUserData} />
                <label className="form-check-label" >male</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="female" onChange={getUserData}/>
                <label className="form-check-label">female</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Create;