import { useState } from "react"
import "./style.css"

export default function Tabs({ tabsContent , OnChange}){

    const [currentTabIndex ,setCurrentTabIndex] = useState(0);

    function handleChange(getCurrentIndex){
setCurrentTabIndex(getCurrentIndex);
OnChange(currentTabIndex );

    }
     
    return(
        <div className="wrapper">
        <div className="heading">
         {tabsContent.map((tabItem ,index) => (
            <div onClick={()=>handleChange(index)} key={tabItem.label}>
                <span >{tabItem.label}</span>
            </div>
        ))
    }
        </div>

        <div className="content" style={{
            color:"red"
        }}>

         <div>{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}</div>   

        </div>
        </div>
    )
}