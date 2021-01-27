import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({tasks, match, onToggleCompleted}) => {
    let filteredTasks;

    switch (match.params.filter){
        case 'completed': 
            filteredTasks = tasks.filter(task =>task.completed) // ici tasks c'est le param en entrée et filter c'est une fonction pour filter un array
            break;
        default :
            filteredTasks = tasks
    }

    if(filteredTasks.length === 0){
        return (
            <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                <li className="list-group-item">Aucune tâche à afficher</li>
            </ul>
            </>
        )
    }else {

        return (
            <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                {
                    filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)
                    // afficher ce qui est terminé 
                }
            </ul>
            </>
        )
    }
}

export default ToDoList;