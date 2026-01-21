import { useState, useEffect } from "react";
export default function useWidth(){
    const [width, setWidth] = useState(0)
    
    const updateWidth = ()=>{
         setWidth(window.innerWidth)
    }

    useEffect(()=>{
        updateWidth()// called here so it can access and set the value when it's available
        window.addEventListener("resize",updateWidth)
        
        return ()=>{
            window.removeEventListener("resize", updateWidth)
        }
    },[])
    
return width
    
}