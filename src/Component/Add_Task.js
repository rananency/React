import axios from 'axios';
import React,{useState} from 'react'
import '../Validation.js'
function Add_Task() {
    var msg=''
    var tempDate = new Date();
    var date = tempDate.getDate()+'-'+ (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() 
    const [title, settitle] = useState()
    const status=false
    const [Task_data, setTaskData] = useState([{
        title:'',
        dueDate:date,
        status:'',
        st1:'',
        st2:'',
        st3:'',
        errmsg:''

    }])
    
    const handle_change=(fname)=> {
        
        if(fname==='')
        {
           setTaskData({...Task_data,errmsg : 'Title is required!!'})
            
            
        }
        else{
            setTaskData({...Task_data,errmsg : ''})
        }
        
    }
    
    // useEffect(() => {
        
    //     if (btnadd_task>0) {
    //            
    // }, [btnadd_task])
    const submit_data=(event)=>{
        
        let Subtask={
                task1:Task_data.st1,
                task2:Task_data.st2,
                task3:Task_data.st3,
            }
            console.log(Subtask)
            let Task_list={
                title:Task_data.title,
                subtask:Subtask,
                dueDate:Task_data.dueDate
            }
            console.log(Task_list)
            // Task_list=JSON.stringify(Task_list)
            
            axios.post('http://localhost:5000/Tasks',Task_list)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })        
            event.preventDefualt()

    }
    return (
        <form onSubmit={submit_data}>
        <div className="main-add-container"> 
            
                <div className="container"> 
                    <div className="add-todo-header">Add To-Do List</div>
                 
                    <div className="add-todo-input">
                        <div className="add-todo-input-title ">Title</div>
                        <div >
                            <input 
                                required
                                type='text' 
                                value={Task_data.title} 
                                onChange={(e)=>{setTaskData({...Task_data,title:e.target.value})}}
                                onBlur={(e)=>handle_change(e.target.value)}
                                className="add-todo-input-data"
                            />
                            <br/>
                            <span className={Task_data.errmsg ? 'err-msg' : ''} >
                            {
                                Task_data.errmsg && <span>{Task_data.errmsg}</span>
                            }
                        </span>
                        </div>
                        
                        
                    </div>
                    <div className="add-todo-input">
                        <div className="add-todo-input-title">Due Date</div>
                        <div>
                        <input 
                            type='date' 
                            className="add-todo-input-data"
                            value={Task_data.dueDate} 
                            onChange={(e)=>setTaskData({...Task_data,dueDate:e.target.value})}/>
                        </div>
                    </div>
                    <div className="add-todo-input">
                        <div className="add-todo-input-title">Subtask 1</div>
                        <div>
                            <textarea 
                            className="add-todo-input-data"
                            value={Task_data.st1} 
                            onChange={(e)=>setTaskData({...Task_data,st1:e.target.value})}
                            >
                            </textarea> 
                        </div>
                        
                    </div>
                    <div className="add-todo-input">
                        <div className="add-todo-input-title">Subtask 2</div>
                        <div>
                            <textarea 
                            className="add-todo-input-data"
                            value={Task_data.st2} 
                            onChange={(e)=>setTaskData({...Task_data,st2:e.target.value})}
                            >
                            </textarea> 
                        </div>
                        
                    </div>
                    <div className="add-todo-input">
                        <div className="add-todo-input-title">Subtask 3</div>
                        <div>
                            <textarea 
                            
                            className="add-todo-input-data"
                            value={Task_data.st3} 
                            onChange={(e)=>setTaskData({...Task_data,st3:e.target.value})}
                            
                            >
                            </textarea> 
                        </div>
                        
                    </div>
                    
                    <div className="add-todo-input btn1 ">
                        <button type='submit' className="btn-add" >Add</button>
                    </div> 
                
                </div>
            
        </div>
    </form>
    )
}

export default Add_Task