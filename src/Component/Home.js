import '../App_style.css'
import React,{useState,useEffect} from "react"
import axios from "axios"
import Moment from 'moment'
function Home() {
    const [Task, setTask] = useState([])
    useEffect(() => {
           axios.get("http://localhost:5000/Tasks")
           .then((res)=>{
               
               console.log(res.data)
               setTask(res.data)
           }) 
           .catch((err)=>{
               console.log(`Error Occure${err}`)
           })
    },[])
    const clear_all=()=>{
        alert('The list is empty')
        axios.delete("http://localhost:5000/Tasks")
           .then((res)=>{
               
               console.log(res.data)
               setTask(res.data)
           }) 
           .catch((err)=>{
               console.log(`Error Occure${err}`)
           })
         
    }
    const check_task=()=>{
        if (Task.length==0) {
            return <div className="empty-task">------ No Task in your List ------</div>
        } else {
            return  Task.map((task1)=>(

                        
                <div className="table-data"> 
                    <div className="title">
                        <div className="task-title">{task1.title} </div> 
                        <div className="task-title1"> 
                            {
                                Moment(task1.dueDate).format('DD-MM-YYYY')
                            }
                        </div> 
                    </div>
                    <span className="subtask-title">Subtask:</span>
                    
                        {
                        
                            <ul className="ul-list">
                                <li>{task1.subtask.task1}</li>
                                <li>{task1.subtask.task2}</li>
                                <li>{task1.subtask.task3}</li>
                            </ul>
                    
                        }
                    
                </div>
            

            ))
        }
    }
    return (
            <div className="main">
                <div className="remove-all">
                   <form> <button className="remove_btn" type='submit' onClick={clear_all}>Clear List</button></form>
                </div>
                <div className="main-data-container"> 
                    {
                            check_task()     
                    }
                </div>
            </div>
    )
}

export default Home
