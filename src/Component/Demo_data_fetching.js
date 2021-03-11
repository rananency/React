import React,{useState,useEffect} from "react"
import axios from "axios"


function Demo_data_fetching() {
    const [Task, setTask] = useState([])
    useEffect(() => {
           axios.get("http://10.100.6.118:4000/Tasks")
           .then((res)=>{
               
               console.log(res.data)
               setTask(res.data)
           }) 
           .catch((err)=>{
               console.log(`Error Occure${err}`)
           })
    },[])
    return (
        <div>
           
               <h1>
                   {
                       Task.map((task1)=>(<h2>{task1.title+task1.status}</h2>))
                   }

               </h1>
               
           
        </div>
    )
}

export default Demo_data_fetching

