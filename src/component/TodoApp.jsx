import React, { useState } from 'react'

const TodoApp = () => {

    const[text, setText]=useState("")
    const[task, setTask]=useState([])

    console.log(text)

    const addTaskButton =(e)=>{
        e.preventDefault();
        if(text.trim()==="")return;
        console.log("Task added");
        setTask([...task, {id:Date.now(), text:text}]);
        setText("");
    }

    console.log(task);


    const deleteTask =(id)=>{
        setTask(task.filter((item)=>item.id!==id));
    }


  return (
    <div>
      <h2 className='text-3xl font-bold mt-5 mb-5'>Make Your Todo list</h2>
      <form className='flex justify-center'>
        <div>
          <input 
          value={text}
          onChange={(e)=>setText(e.target.value)}
          className='bg-gray-200 border-1 border-gray-400 p-3'
          type="text" name='text' id='text' placeholder='Type here.......' />
        </div>
        <button 
        onClick={addTaskButton}
        className='bg-blue-500 py-2 px-4 text-white cursor-pointer ml-5 rounded-lg hover:bg-blue-600 transition ease-in-out duration-200'
        >Add Task</button>
      </form> 

      <div>
        {   
            task.length > 0 ?
            <ul>
                {
                    task.map((listIteam , index)=>(
                        <li 
                        className='flex justify-between items-center bg-gray-300 mb-5 p-2 mt-4 rounded-lg border-1 border-gray-400'
                        key={index}>
                            <input className='mr-5' type="checkbox" />
                            <span>{listIteam.text}</span>
                            <button 
                            onClick={()=>deleteTask(listIteam.id)}
                            className='bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer'>DELETE</button>
                        </li>
                    ))
                }
            </ul>
            :<p className='mt-4'>Empty now!</p>
        }

        {/* <p className='mt-4'>Empty now!</p> */}
      </div>
    </div>
  )
}

export default TodoApp