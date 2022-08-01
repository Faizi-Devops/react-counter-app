import { useState } from "react";

let Responsive = () => {
    let [count,setCount]=useState(0);
    let inc=()=>{
        setCount(count=count+1);
    }
    let dec=()=>{
        setCount(count=count-1)
    }
    let res=()=>{
        setCount(count=0);

    }
    if(count<0)
    {
        setCount(count=0) 
    }

    return (
        <div>
            <div className="B">
                <h3 className="C">Counter Application</h3>
                <h1 className="D">{count}</h1>
                <br /><br />
                <div className="E ">
                <button type="button" class="btn btn-warning bb" onClick={inc}>Increament+</button><span> </span>
                <button type="button" class="btn btn-warning" onClick={dec}>Decreament-</button><br /><br />
                <button type="button" class="btn btn-danger" onClick={res}>Resset</button>
                </div>
            </div>
        </div>
        
    )
}
export default Responsive;