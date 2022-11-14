import React from "react";
import { List } from "reactstrap";

const ToDoList = ({ toDo, changeTaskStatus, setUpdateData, deleteTask, FontAwesomeIcon, faCircleCheck, faPen, faTrashCan }: any) => {
    return(
        <>
            {toDo && toDo
                .sort((a: { id: number; }, b: { id: number; }) => a.id > b.id ? 1 : -1)
                .map( (task: { id: React.Key | null | undefined; status: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: number) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className="col taskBg">
                                <div className={task.status ? 'done' : ''}>
                                    <span className="taskNumber">{index + 1}</span>
                                    <span className="taskText">{task.title}</span>
                                </div>

                                <div className="iconsWrap">
                                    <span title = "Completed / Not Completed"
                                          onClick={() => changeTaskStatus(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faCircleCheck}/>
                                    </span>

                                    {task.status ? null : (
                                        <span title = "Edit"
                                              onClick={ () => setUpdateData({id: task.id, title: task.title, status: task.status}) }
                                        >
                                            <FontAwesomeIcon icon={faPen}/>
                                        </span>
                                    )}

                                    <span title = "Delete"
                                          onClick={() => deleteTask(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default ToDoList;