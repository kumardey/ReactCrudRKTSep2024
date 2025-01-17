import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Iframe = () =>{

    // const dispatch = useDispatch();

    // const[id,setId] = useState(); 
    // const[showPopup,setShowPopup] = useState(false)
    // const { users, loading, searchData } =useSelector((state) =>state.app);

    // useEffect(()=>{
    //     dispatch(showUser());
    // }, []);

    // if(loading){
    //     return <h2> Loading</h2>
    // }
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = queryParams.get("url");

    return(
        <div>
            {/* <h1>Embedding an Iframe in React</h1>
            <iframe
                src="https://www.youtube.com/results?search_query=react+report+builder"
                title="Example Website"
                width="600"
                height="400"
                style={{ border: "1px solid black" }}
            ></iframe> */}
            <h1>Embedded Iframe</h1>
            {url ? (
                <iframe
                src={url}
                title="Embedded Page"
                width="70%"
                height="500px"
                style={{ border: "1px solid black" }}
                ></iframe>
            ) : (
                <p>No URL provided</p>
            )}
        </div>
       
    );
};

export default Iframe;