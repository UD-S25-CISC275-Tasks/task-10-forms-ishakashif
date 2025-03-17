import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function handleEditModeChange() {
        setIsEditMode(!isEditMode);
    }

    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function handleIsStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                Edit Mode
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={handleEditModeChange}
                />
            </label>
            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleIsStudentChange}
                        />
                        Student
                    </label>
                </div>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
