import Createprojects from "./components/Createprojects";
import Noprojects from "./components/Noprojects";
import { useState } from "react";

function App() {
  let projects = [
    {projectName: "Learning Reactive"},
  ]
  const [hasNoProjects, setHasNoProjects] = useState(true)
  const [hasStartedNewProject, setHasStartedNewProject] = useState(false)

  function createProject(){
    setHasNoProjects(false);
    setHasStartedNewProject(true);
  }

  function saveNewProject(){
    alert("OK");
  }

  
  return (
    <>
        <main className="h-screen my-8 flex gap-8">
          <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={createProject}>+ Add Project</button>
            {projects.length >0 && 
              <ul className="mt-8">
                {projects.map((p)=>
                  <li className="px-4 py-2 hover:bg-stone-800 text-stone-400 hover:text-stone-100">{p.projectName}</li>
                )}
              </ul>
            }
          </aside>
          {hasNoProjects && <Noprojects handleClick={createProject}/>}
          {hasStartedNewProject && <Createprojects handelSaveNewProject={saveNewProject}/>}
        </main>
    </>
  );
}

export default App;
