import { useState } from "react";

let Timer = () =>{
    let time = new Date().toLocaleTimeString();
    let [stime,setStime]=useState(time);
    setInterval(() => {
        kuch()
        
    }, 1000);
    let kuch= () =>{
        let time = new Date().toLocaleTimeString();
        setStime(time);
    }
    return(
        <div>
            <h1 className="A">{stime}</h1>

        </div>
    )
}
export default Timer;