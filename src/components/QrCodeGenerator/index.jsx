import { useState } from "react"
import QRCode from "react-qr-code";

export default function QrCodeGenerator(){
  const [input , setInput] = useState("");
  const [ QrCode ,setQrCode ] = useState("");

  function generateQr(getInput){

    setQrCode(getInput);
    setInput("")
  }

    return (
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"

        }}>
            <h1>QR-CODE-GENERATOR</h1>
            <div>
                <input onChange={(e)=>setInput(e.target.value)} placeholder="enter value" value={input} name="qr-code" type="text"></input>
                <button style={{marginBottom:50}} disabled={input && input.trim()!==""?false:null} onClick={  ()=>generateQr(input)}>Generate</button>
            </div>
            <div>
               <QRCode id="qr-code-value" value={QrCode} size ={400} bg='#fff' />
            </div>
        </div>
    )
}