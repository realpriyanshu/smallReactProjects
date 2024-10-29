import { useState } from "react"

export default function Color(){
 const [typeOfColor ,setTypeOfColor] = useState("hex");
 const [updateColor , setUpdateColor] = useState("#000000");

 function hexColor(){
const arr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    // var col = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
let hash = "#";
    

    for(var i =0;i<6;i++){
      hash+= arr[Math.floor(Math.random()*arr.length)];
    }

    setUpdateColor(hash);
    

 }
 function rgbColor(){
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var d = Math.floor(Math.random() * 256);
      

    setUpdateColor(`rgba(${a}, ${b}, ${c}, ${d})`)

 }
 function color(){

 }

    return (
    <div style={{
     height: "100vh", width: "100vw", backgroundColor: updateColor, display:"flex",justifyContent:"center",alignItems:"center"
    }}>

        <button style={{
            padding:10,
            margin:10
            
        }} onClick={()=>setTypeOfColor("rgb")}  >RGB</button>
        <button style={{
            padding:10,
            margin:10
            
        }} onClick={()=>setTypeOfColor("hex")}>HEX</button>
        <button style={{
            padding:10,
            margin:10
            
        }}  onClick={()=>{
            typeOfColor==="hex"? hexColor():rgbColor()
        }}>Generate Color</button>

    </div>)
}