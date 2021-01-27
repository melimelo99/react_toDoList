import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import initialData from '../initialData';
import uniqueid from 'uniqueid';

class App extends React.Component {

  state = {
    tasks: initialData
  }

  onToggleCompleted=(taskId) => {
    let taskToUpdate = this.state.tasks.find(task => task.id === taskId)  // recherche dans la liste de tâche celle que je dois modifier (pour les afficher dans completed)
    taskToUpdate.completed = !taskToUpdate.completed;

    this.setState(prevState => {
      prevState.tasks.map(task => {
        return task.id === taskId ? taskToUpdate : task
      })
    })
  }

  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqueid(),
      name: newTaskName,
      completed:false
    }
    this.setState(prevState=> ({     //injecter la nouvelle tache dans la liste actuelle des tâches 
      tasks: [...prevState.tasks, newTask]
    }))
  }

  onDeleteCompleted =() => {
    this.setState(prevState => {
      let newState =prevState.tasks.filter(task=>!task.completed)
      return {
        tasks: newState
      }
    })
  }

//onToggleCompleted pour faire passer cette fonction a ToDoList.js ligne 31
  render(){
    return (
      <section id="todo">
        <BrowserRouter>
          <Switch>
            <Route path ="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask}/>}/>
            <Route path="/:filter?" render={(props) => <ToDoList {...props}  tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/> 
          </Switch>
          <NavBar onDeleteCompleted={this.onDeleteCompleted}/>
        </BrowserRouter>
      </section>
    )
  } 
}

export default App;
