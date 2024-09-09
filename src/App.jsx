import Createprojects from "./components/Createprojects";
import Noprojects from "./components/Noprojects";
import ShowProjectDetail from "./components/ShowProjectDetail";

import { useState } from "react";

function App() {
  const sampleProjects = [
    {
      id: 0,
      title: "Learning Project",
      dueDate: "Dec 29, 2024",
      description: "Learn React from the group up. \n\nStart with the basics, finish with advanced knowledge.",
      tasks:['Practice, practice, practice', 'Learn advanced concepts', 'Learn the basics'],
    },
    {
      id: 1,
      title: "Learning Project 2",
      dueDate: "Dec 29, 2024",
      description: "Learn React from the group up. \n\nStart with the basics, finish with advanced knowledge.",
      tasks:['Practice, practice, practice', 'Learn advanced concepts', 'Learn the basics'],
    },
  ]
  const [projects, setProjects] = useState(sampleProjects);

  const [hasNoProjects, setHasNoProjects] = useState(true)
  const [hasStartedNewProject, setHasStartedNewProject] = useState(false)
  const [projectDetail, setProjectDetail] = useState({});


  function createProject(){
    setHasNoProjects(false);
    setHasStartedNewProject(true);
  }

  function saveNewProject(newProject){
    setProjects([...projects, newProject]);
    setHasNoProjects(false);
    setHasStartedNewProject(false);
    setProjectDetail(newProject);
  }

  function displayProject(idx){
    const newProjectDetails = {...projects[idx]}
    setProjectDetail(newProjectDetails);
    setHasNoProjects(false);
  }

  function deleteProject(idx){
    let newProjectsList = [];
    let newIndex = 0;
    
    for (let i = 0; i<projects.length;i++){
      if (i!=idx){
        projects[i].id = newIndex;
        newIndex = newProjectsList.push(projects[i]);
      }
    }
   
    setProjects(newProjectsList);
    setHasNoProjects(true);
  }

  function addTask(newTask, idx){
        setProjectDetail({...projectDetail, tasks:[...projectDetail.tasks, newTask]});
        
        const newProjectList = [...projects];

        for (let i = 0; i<newProjectList.length;i++){
          if (i===idx){
            newProjectList[i].tasks.push(newTask);
          }
        }
        setProjects(newProjectList);
    }

    
  
  return (
    <> 
        <main className="h-screen my-8 flex gap-8">
          <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={createProject}>+ Add Project</button>
            {projects.length > 0 && 
              <ul className="mt-8">
                {projects.map((p, index)=>
                  <li className="px-4 py-2 hover:bg-stone-800 text-stone-400 hover:text-stone-100" key={index}><button onClick={()=>displayProject(index)} >{p.title}</button></li>
                )}
              </ul>
            }
          </aside>
          {hasNoProjects && <Noprojects handleClick={createProject}/>}
          {hasStartedNewProject && <Createprojects handelSaveNewProject={saveNewProject} index={projects.length}/>}
          {(!hasNoProjects && !hasStartedNewProject) && <ShowProjectDetail project={projectDetail} handleRemoveProject={deleteProject} handleAddNewTask={addTask}/>}
        </main>
    </>
  );
}

export default App;
