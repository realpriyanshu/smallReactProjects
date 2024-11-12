import { useState } from "react";
import Model from "./Model";
import { FaLeaf } from "react-icons/fa";

export default function ModelTest(){

    const [showModelPopUp , setShowModelPopUP] = useState(false);

    function handleToggle(){
        setShowModelPopUP(!showModelPopUp);
        console.log("hello")
    }

    return <div >
<button onClick={()=>(handleToggle())}>ok</button> 
{showModelPopUp && <Model />}

    </div>
}