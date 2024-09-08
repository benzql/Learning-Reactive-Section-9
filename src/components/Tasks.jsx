import { useRef } from "react";

export default function Tasks({tasks, handleNewTask}){
    const newTask = useRef();
    const taskIndex = useRef();

    function addNewTask(){
        handleNewTask(newTask.current.value);
    }

    return(
        <>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" ref={newTask} />
                <button className="text-stone-600 hover:text-stone-950 ml-4" onClick={addNewTask}>Add Task</button>
                {<ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((t, index)=>{
                        return (
                            <li className="flex justify-between my-4" key={index}>{t}
                                <button className="text-stone-700 hover:text-red-500">Clear</button>
                            </li>);
                        })
                    }
                </ul> }
        </>

    );
}