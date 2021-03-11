import '../App_style.css'
import React,{useState,useEffect} from "react"
import axios from "axios"

function Home() {
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
            <div className="main-data-container"> 
                {
                Task.map((task1)=>(
                    
                        <div className="table-data"> 
                            <div className="title">
                                <div>{task1.title} </div> 
                                <div className="task-title">{task1.duedate}</div> 
                            </div>
                            <span className="subtask-title">Subtask:</span>
                                {task1.tasks.map((subtask)=>(
                                    <ul className="ul-list">
                                        <li>{subtask.subtask1}</li>
                                        <li>{subtask.subtask2}</li>
                                        <li>{subtask.subtask3}</li>
                                    </ul>
                                ))} 
                            
                        </div>
                      

                    ))
                }
            </div>
       
    )
}

export default Home
