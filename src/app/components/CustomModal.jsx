import React from "react";
import"./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({id ,showPopup, setShowPopup}) =>{

    const allusers =useSelector((state) =>state.app.users);
    
    const singleuser = allusers.filter((ele)=>ele.id === id);
    console.log("singleuser",singleuser);
    return (
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <h1>Hello</h1>
                
                <h1>{singleuser[0].name}</h1>
                <h1>{singleuser[0].email}</h1>
                <h1>{singleuser[0].age}</h1>
                <h1>{singleuser[0].gender}</h1>
                <button onClick={()=>setShowPopup(false)}>Close</button>
            </div>
        </div>
        </>
    );
};

export default CustomModal;
