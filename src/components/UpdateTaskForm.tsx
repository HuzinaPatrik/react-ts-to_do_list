import React from "react";

const UpdateTaskForm = ({ updateData, setUpdateData, updateTask, cancelUpdate }: any) => {
    return(
        <>
            {/*Update Task */}

            <div className="row">
                <div className = "col">
                    <input
                        value = {updateData.title}
                        onChange = { (e) => {
                            setUpdateData({id: updateData.id, title: e.target.value, status: updateData.status})
                        } }

                        className = "form-control form-control-lg"
                    />
                </div>

                <div className="col-auto">
                    <button
                        onClick={updateTask}
                        className = "btn btn-lg btn-info mr-20"
                    >Update</button>

                    <button
                        onClick={cancelUpdate}
                        className = "btn btn-lg btn-warning"
                    >Cancel</button>
                </div>
            </div>

            <br/>
        </>
    )
}

export default UpdateTaskForm;