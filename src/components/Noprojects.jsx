import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function Noprojects({handleClick}){
    return (
        <div className="w-3/4 mt-16 mr-16">
            <img src={logo} alt="no projects logo" className="w-16 h-16 object-contain mx-auto" />
            <div className="mx-auto text-center items-center justify-between w-full">
              <h2 className="text-xl font-bold text-stone-700 my-4">No Projecte Selected</h2>
              <p className="text-stone-400 mb-4 ">Select a project or get Started with a new one</p>
              <Button isMainButton onClick = {handleClick}>
                Create new project
              </Button>
            </div>
          </div>
    );
}