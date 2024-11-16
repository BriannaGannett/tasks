import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function selectChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={choice} onChange={selectChoice}>
                {options.map((currentOption, index) => (
                    <option key={index} value={currentOption}>
                        {currentOption}
                    </option>
                ))}
            </Form.Select>
            <p>{choice === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
