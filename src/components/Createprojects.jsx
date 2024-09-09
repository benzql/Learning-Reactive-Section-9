import { useRef, useState } from "react";

export default function Createprojects({handelSaveNewProject, index}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    

    return(
        <div className="w-3/4 mt-16 mr-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button 
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" 
                    onClick={()=>handelSaveNewProject(
                        {
                            id: index,
                            title: title.current.value,
                            description: description.current.value,
                            dueDate: dueDate.current.value,
                            tasks:[],
                        }
                    )}>
                    Save
                </button>
            </menu>
            <section>
                <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
                <input ref={title} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
                <textarea rows='10' ref={description} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></textarea>
                <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
                <input ref={dueDate} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date"/>
            </section>
        </div>
    );
}