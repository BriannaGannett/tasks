import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode-check"
                label="In Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            <div>
                {editMode ?
                    <div>
                        <Form.Check
                            type="switch"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                        <Form.Group controlId="formEnterName">
                            <Form.Label>Enter Name:</Form.Label>
                            <Form.Control
                                value={username}
                                onChange={updateUsername}
                            />
                        </Form.Group>
                    </div>
                :   <div></div>}
            </div>
            <div></div>
            {username} is {isStudent ? "" : "not"} a student
        </div>
    );
}
