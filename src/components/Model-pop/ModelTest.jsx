import { useState } from "react";
import Model from "./Model";


export default function ModelTest(){

    const [showModelPopUp , setShowModelPopUP] = useState(false);

    function handleToggle(){
        setShowModelPopUP(!showModelPopUp);
        console.log("hello")
    }

    return <div >
<button onClick={()=>(handleToggle())}>Click</button> 
{showModelPopUp && <Model id={1} footer={"footer hai bhai "} header={" header hai bhai "} body={" this is my body which i have made by hitting the gym every day"} />}

    </div>
}