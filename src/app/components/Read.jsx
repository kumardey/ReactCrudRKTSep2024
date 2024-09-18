import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../features/userDetailSlice";
import { deleteUser } from "../../features/userDetailSlice";
import CustomModal from "./CustomModal";
import {Link} from 'react-router-dom';

const Read = () =>{

    const dispatch = useDispatch();

    const[id,setId] = useState(); 
    const[showPopup,setShowPopup] = useState(false)
    const { users, loading } =useSelector((state) =>state.app);

    useEffect(()=>{
        dispatch(showUser());
    },[]);

    if(loading){
        return <h2> Loading</h2>
    }

    return(
        <div>
            { showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}
            <h2>All Datas</h2>
            <div>
                {users && users.map((ele) =>(
                    <div key={ele.id} className="card w-50 mx-auto my-2">
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                            <p className="card-text">{ele.gender}</p>
                            <button className="card-link" onClick={()=>[setId(ele.id), setShowPopup(true)]}>View</button>
                            <a href="#" className="card-link">Edit</a>
                            <Link onClick={()=> dispatch(deleteUser(ele.id))}className="card-link">Delete</Link>
                            {/* <Link></Link> */}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="card w-50 mx-auto">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div> */}
        </div>
    );
};

export default Read;

