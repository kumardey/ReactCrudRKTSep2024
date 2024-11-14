import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/userDetailSlice";

const Update = () =>{

    const { id }= useParams()
    const dispatch = useDispatch();
   
    const [UpdateData , setUpdateData ] =useState({});  
    const navigate = useNavigate(); 

    const { users, loading } =useSelector((state) =>state.app);
    useEffect(() =>{
        if(id){
            const singleUser = users.filter((ele) =>ele.id === id);
            setUpdateData(singleUser[0]);
        }
    },[])
    

    const getUserData = (e) =>{
        // setUser({...users  , [e.target.name] :e.target.value})
        setUpdateData({...UpdateData  , [e.target.name] :e.target.value})
        // console.log(users);
    };

    const handleUpdate=(e) =>{
        e.preventDefault()
        // console.log("UpdateData..",UpdateData);
        dispatch(updateUser(UpdateData));
        
        navigate("/read");

    };
    return (
        // <div>Update</div>
        <div>
            <h2 className ="my-2">Edit the data</h2>
            <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" name="name" value={UpdateData && UpdateData.name} onChange={getUserData} />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputPassword1" name="email" value={UpdateData && UpdateData.email} onChange={getUserData}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Age</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="age" value={UpdateData && UpdateData.age} onChange={getUserData} />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="male" checked= {UpdateData && UpdateData.gender == 'male'} onChange={getUserData} />
                <label className="form-check-label" >male</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="female" checked= {UpdateData && UpdateData.gender == 'female'} onChange={getUserData}/>
                <label className="form-check-label">female</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Update