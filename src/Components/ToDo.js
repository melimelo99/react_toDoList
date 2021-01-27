import React from 'react';

class ToDo extends React.Component {

    state ={
        completed: this.props.task.completed
    }

    toggleCompleted = () => {
        this.setState(prevState=>({     //prevState ancienne version de l'état , si true alors avec la suite devient false
            completed: !prevState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)        // execution de la foncion de App.js, id de la tâche que je veux modifier
    }

    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center "+ (this.state.completed? 'bg-success': null)}>
            {this.props.task.name}
            <button className={"btn btn-sm ml-auto btn-outline-success " +(this.state.completed? 'btn-success' : 'btn-hotline-sucess')} onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo;