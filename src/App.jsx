import Createprojects from "./components/Createprojects";
import Noprojects from "./components/Noprojects";
import ShowProjectDetail from "./components/ShowProjectDetail";
import ProjectSideBar from "./components/ProjectSideBar";

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

  function cancelCreateProject(){
    setHasNoProjects(true);
    setHasStartedNewProject(false);
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
    setHasStartedNewProject(false);
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
    const newProjectList = [...projects];
    newProjectList[idx].tasks.push(newTask);  

    setProjects(newProjectList);
    setProjectDetail(newProjectList[idx]);
  }

  function removeTask(taskId, idx){
    const newProjectList = [...projects];
    newProjectList[idx].tasks.splice(taskId, 1);
    
    setProjects(newProjectList);
    setProjectDetail(newProjectList[idx]);
  }
  
  return (
    <> 
        <main className="h-screen my-8 flex gap-8">
          <ProjectSideBar projectList ={projects} handleCreateProject={createProject} handelDisplayProject={displayProject}/>
          {hasNoProjects && <Noprojects handleClick={createProject}/>}
          {
            hasStartedNewProject && 
            <Createprojects 
              handelSaveNewProject={saveNewProject} 
              index={projects.length} 
              handleCancelNewProject={cancelCreateProject}
            />
          }
          {
            (!hasNoProjects && !hasStartedNewProject) && 
            <ShowProjectDetail 
              project={projectDetail} 
              handleRemoveProject={deleteProject} 
              handleAddNewTask={addTask} 
              handleRemoveTask={removeTask}
            />
          }
        </main>
    </>
  );
}

export default App;
