import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck, faPen, faTrashCan
} from "@fortawesome/free-solid-svg-icons"
import './App.css'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import AddTaskForm from './components/AddTaskForm'
import UpdateTaskForm from './components/UpdateTaskForm'
import ToDoList from './components/ToDoList'

function App() {
    //Tasks

    interface ToDo {
        id: number;
        title: any;
        status: boolean;
    }

    const [toDo, setToDo] = useState([
        {"id": 1, "title": "Teszt", status: false},
        {"id": 2, "title": "Teszt2", status: false},
        {"id": 3, "title": "Teszt3", status: false},
    ])

    //TempState
    const [newTask, setNewTask] = useState('')
    const [updateData, setUpdateData] = useState<ToDo>({id: 0, title: "", status: false})

    //Add task
    const addTask = () => {
        if (newTask) {
            const id = toDo.length + 1;
            const details = { id: id, title: newTask, status: false }

            setToDo([...toDo, details])
            setNewTask("");
        }
    }

    //Remove task
    const deleteTask = (id: number) => {
        let newTasks = toDo.filter( task => task.id !== id )
        setToDo(newTasks);
    }

    //Change task status
    const changeTaskStatus = (id: number) => {
        let newTasks = toDo.map( task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status})
            }

            return task;
        })

        setToDo(newTasks);
    }

    //Cancel update
    const cancelUpdate = () => {
        if (updateData.id !== 0) {
            setUpdateData({id: 0, title: "", status: false})
        }
    }

    //Change task to update
    const changeTask = (id: number, title: String) => {
        let newTasks = toDo.map(task => {
            if (task.id === id) {
                return ({...task, title: String(title)})
            }

            return task;
        })

        setToDo(newTasks);
    }

    //Update task
    const updateTask = () => {
        if (updateData.id !== 0) {
            changeTask(updateData.id, updateData.title);

            setUpdateData({id: 0, title: "", status: false})
        }
    }

    return (
        <div className="container App">
            <br/><br/>
            <h2>To Do List App (ReactJS)</h2>
            <br/><br/>

            {updateData && updateData.id !== 0 ? (
                <UpdateTaskForm
                    updateData={updateData}
                    setUpdateData={setUpdateData}
                    updateTask={updateTask}
                    cancelUpdate={cancelUpdate}
                />
            ) : (
                <AddTaskForm
                    newTask={newTask}
                    addTask={addTask}
                    setNewTask={setNewTask}
                />
            )
            }

            {/* Display TO:DO */}

            {toDo && toDo.length ? '' : 'No tasks...'}

            <ToDoList
                toDo={toDo}
                changeTaskStatus={changeTaskStatus}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
                FontAwesomeIcon={FontAwesomeIcon}
                faCircleCheck={faCircleCheck}
                faPen={faPen}
                faTrashCan={faTrashCan}
            />
        </div>
    );
}

export default App;
