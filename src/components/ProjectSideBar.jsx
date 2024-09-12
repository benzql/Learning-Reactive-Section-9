import Button
 from "./Button";
export default function ProjectSideBar({projectList, handleCreateProject, handelDisplayProject}){
    function createProject(){
        handleCreateProject();
    }

    function displayProject(idx){
        handelDisplayProject(idx);
    }

    return (
         <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={createProject}>+ Add Project</Button>
            </div>
            {projectList.length > 0 && 
              <ul className="mt-8">
                {projectList.map((p, index)=>
                  <li className="px-4 py-2 hover:bg-stone-800 text-stone-400 hover:text-stone-100" key={index}><button onClick={()=>displayProject(index)} >{p.title}</button></li>
                )}
              </ul>
            }
          </aside>
    );
}