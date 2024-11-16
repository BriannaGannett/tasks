import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function getAnswer() {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group id="formCheckAnswer">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control value={answer} onChange={changeAnswer} />
            </Form.Group>
            <p>{getAnswer()}</p>
        </div>
    );
}
