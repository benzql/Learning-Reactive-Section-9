import Tasks from "./Tasks";
import { useState } from 'react';

export default function ShowProjectDetail({project}){
    const [projectDetail, setprojectDetail] = useState(project);

    function addTask(newTask){
        console.log(projectDetail);
        setprojectDetail({...projectDetail, tasks:[...projectDetail.tasks, newTask]});
    }

    return (
        <>
            <div className="w-3/4 mt-16 mr-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{projectDetail.title}</h1>
                        <button className="text-stone-600 hover:text-stone-950">Delete</button>
                    </div>
                <p className="mb-4 text-stone-400">{projectDetail.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{projectDetail.description}</p>
                </header>
                <Tasks tasks={projectDetail.tasks} handleNewTask = {addTask}/>
            </div>
        </>
    );
}