import { useEffect, useState, useSyncExternalStore } from "react"

export default function ImageSlider({url , limit}){

    const [images , setImages] = useState([]);
    const [currentSlide , setCurrentSlide] = useState(0);
    const [errorMsg , setErrorMsg] = useState("");
    const [loading , setLoading] = useState(false);

    async function fetchImages(getUrl){
        setLoading(true);
       try{
           const response = await fetch(`${getUrl}?limit=${limit}`);
           const data = await response.json();
           setImages(data)
           setLoading(false);
          
       }catch(e){
        setErrorMsg(e);
       }
    }
 function leftSlide(){

    
 }
 function rightSlide(){

    
 }

    useEffect(()=>{
        if(url !== ""){
              fetchImages(url);

        }
    },[url])

    return(
        <div>
           {loading ? (
            <div> Loading</div>
           ): errorMsg? (<div>{errorMsg}</div>):
           (
            <div>
                <button>Left</button>
                <button>Right</button>
                <div>
                    {images.length>0?
                    images.map((img,ind)=>(
                        <div>
                            <img src={img.download_url} height = "500"width="700" />
                        </div>
                    ))
                    :<div>No image i available</div>}
                </div>
            </div>
           )
           }
      
    </div>
    


    )
}