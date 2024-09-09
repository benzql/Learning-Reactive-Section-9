import Tasks from "./Tasks";

export default function ShowProjectDetail({project, handleRemoveProject, handleAddNewTask}){
    
    function deleteProject(projectIndex){
        handleRemoveProject(projectIndex);
    }

    function addNewTask(newTask){
        handleAddNewTask(newTask, project.id);
    }

    return (
        <>
            <div className="w-3/4 mt-16 mr-16">
                <header className="pb-4 mb-4 border-b-2 border-stone-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                        <button className="text-stone-600 hover:text-stone-950" onClick={()=>{deleteProject(project.id)}}>Delete</button>
                    </div>
                <p className="mb-4 text-stone-400">{project.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
                </header>
                <Tasks tasks={project.tasks} handleNewTask = {addNewTask}/>
            </div>
        </>
    );
}