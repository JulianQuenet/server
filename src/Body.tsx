import { useState, useEffect, useRef } from "react";

export function Body(){
   const ref = useRef<any>()
    useEffect(()=>{
    console.log(ref.current.id)
    },[])


    return(
    <>
     <div className="data">
        <button id={"left"} ref={ref}>
        </button>
        <button id={"right"}>
        </button>
      </div>
    </>
    )
}