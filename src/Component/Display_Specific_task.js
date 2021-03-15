import React,{useEffect,useState} from 'react'
import axios from 'axios'
function Display_Specific_task() {
    var msg=''
    var tempDate = new Date();
    var date = tempDate.getDate()+'-'+ (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() 
    const [title, settitle] = useState()
    const [specific_Task, setspecific_Task] = useState([])
    const [Task, setTask] = useState([])
        useEffect(() => {
            axios.get("http://localhost:5000/Tasks")
            .then((res)=>{
                
                
                setTask(res.data)
            }) 
            .catch((err)=>{
                console.log(`Error Occure${err}`)
            })
    },[])
    const submit_form=()=>{
    
        let Task_id=title
        axios.get(`http://localhost:5000/Tasks/${Task_id}`)
        .then((res)=>{
            console.log(res.data)
            setspecific_Task(res.data)
            console.log(specific_Task.title)
            
        })
        .catch((err)=>{
            console.log(err)
        }) 
        
        
    }
    const check_task=()=>{
        if (specific_Task.length!=0) {
            return  (
                        
                <div className="display-data-table"> 
                    <div className="title">
                        <div className="task-title">{specific_Task.title} </div> 
                        <div className="task-title1">{specific_Task.dueDate}</div> 
                    </div>
                    <span className="subtask-title">Subtask:</span>
                    
                        {
                        
                            <ul className="ul-list">
                                <li>{specific_Task.subtask.task1}</li>
                                <li>{specific_Task.subtask.task2}</li>
                                <li>{specific_Task.subtask.task3}</li>
                            </ul>
                    
                        }
                    
                </div>
            

            )
        }
    }
    return (
        <div>       
             <div className="main-add-container"> 
            
                <div className="container"> 
                    <div className="add-todo-header">Add To-Do List</div>
                 
                    <div className="add-todo-input">
                        <div className="add-todo-input-title ">Title</div>
                        <div >
                        <select className="add-todo-input-data" onBlur={(e)=>settitle(e.target.value)}>
                            {
                               
                                Task.map((t1)=>(
                                
                                    <option value={t1.id}>{t1.title}</option>
                                ))
                            }
                            </select>
                            {/* <input 
                                required
                                type='text' 
                                value={Task_data.title} 
                                onChange={(e)=>{setTaskData({...Task_data,title:e.target.value})}}
                                onBlur={(e)=>handle_change(e.target.value)}
                                className="add-todo-input-data"
                            /> */}
                            <br/>
                            {/* <span className={Task_data.errmsg ? 'err-msg' : ''} >
                            {
                                Task_data.errmsg && <span>{Task_data.errmsg}</span>
                            }
                        </span> */}
                        </div>
                        
                        
                    </div>
                   
                   
                        
                    
                    <div className="add-todo-input btn1 ">
                        <button onClick={submit_form} className="btn-add" >Add</button>
                    </div> 
                
                </div>
            
        </div>
    <div className='display-data'>
 
                    {
                            check_task()     
                    }
   </div>
    </div>


    )
}

export default Display_Specific_task
