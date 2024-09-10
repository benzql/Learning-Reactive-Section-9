import { useRef, useState } from "react";

export default function Tasks({tasks, handleNewTask, handleClearTask}){
    const newTask = useRef();
    const taskIndex = useRef();
    const [newTaskInputField, setNewTaskInputField] = useState();

    function addNewTask(){
        handleNewTask(newTask.current.value);
        setNewTaskInputField('');
    }

    function updateTaskInputField(event){
        setNewTaskInputField(event.target.value);
    }

    function clearTask(event){
        console.log(event.target.value);
        handleClearTask(event.target.value);
    }

    return(
        <>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" ref={newTask} value={newTaskInputField} onChange={updateTaskInputField}/>
                <button className="text-stone-600 hover:text-stone-950 ml-4" onClick={addNewTask}>Add Task</button>
                {<ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((t, index)=>{
                        return (
                            <li className="flex justify-between my-4" key={index}>{t}
                                <button className="text-stone-700 hover:text-red-500" onClick={clearTask} value={index}>Clear</button>
                            </li>);
                        })
                    }
                </ul> }
        </>

    );
}