import axios from 'axios';
import React,{useState} from 'react'
import '../Validation.js'
function Add_Task() {
    var msg='jhmn,'
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
        st3:''

    }])
    
    const handle_change=(fname)=> {
    
        if(fname==='')
        {
            msg='not null'
            console.log(msg)
            
        }
        else{
            console.log(fname)
        }
        
    }
    // useEffect(() => {
        
    //     if (btnadd_task>0) {
    //            
    // }, [btnadd_task])
    const submit_data=(event)=>{
        
        let Subtask=[{
                subtask1:Task_data.st1,
                subtask2:Task_data.st2,
                subtask3:Task_data.st3,
            }]
            console.log(Subtask)
            let Task_list={
                title:Task_data.title,
                tasks:Subtask,
                dueDate:Task_data.dueDate
            }
            console.log(Task_list)
            // Task_list=JSON.stringify(Task_list)
            
            axios.post('http://10.100.6.118:4000/Tasks',Task_list)
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
                        <div>
                            <input 
                                required
                                className="add-todo-input-data"
                                type='text' 
                                value={Task_data.title} 
                                onChange={(e)=>setTaskData({...Task_data,title:e.target.value})}
                                onBlur={(e)=>handle_change(e.target.value)}
                            />
                        </div>
                        <div className="err-msg">
                            <h3>
                            {
                                msg && <h3>{msg}</h3>
                                
                            }
                            </h3>
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