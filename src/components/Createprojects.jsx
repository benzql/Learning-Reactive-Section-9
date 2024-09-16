import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function Createprojects({handelSaveNewProject, index, handleCancelNewProject}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const modal = useRef();
    
    function saveNewProject(newProject){
        if (newProject.title === '' || newProject.description === '' || newProject.dueDate === ''){
            modal.current.open();
            return;
        }else{
            handelSaveNewProject(newProject);
        }
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-900 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4 ">Oops ... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4 ">Please make sure your provide a valid value for every input field.</p>
        </Modal>
        <div className="w-3/4 mt-16 mr-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <Button isMainButton={false} onClick={handleCancelNewProject}>Cancel</Button>
                <Button isMainButton
                    onClick={()=>saveNewProject(
                        {
                            id: index,
                            title: title.current.value.trim(),
                            description: description.current.value.trim(),
                            dueDate: dueDate.current.value.trim(),
                            tasks:[],
                        }
                    )}>
                    Save
                </Button>
            </menu>
            <section>
                <Input ref={title}  label="TITLE" type="text"/>
                <Input ref={description} label="DESCRIPTION" textarea/>
                <Input ref={dueDate}label="DUE DATE" type="date"/>
            </section>
        </div>
        </>
    );
}