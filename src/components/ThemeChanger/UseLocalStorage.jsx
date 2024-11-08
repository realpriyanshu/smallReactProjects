import { useEffect, useState } from "react"



export default function UseLocalStorage( key,defaultValue){

    const [value,setValue]= useState(()=>{   
        let currentValue ;

        try{

            currentValue =JSON.parse(localStorage.getItem(Key)|| String(defaultValue))

        }catch(err)
        { 
            console.log(err);
            currentValue = defaultValue;

        }
        return currentValue;
    })
        
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))

    },[key, value])

return [value,setValue];
}