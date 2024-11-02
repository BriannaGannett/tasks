import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, setIsRevealed] = useState(false);
    const handleReveal = () => {
        setIsRevealed(!isRevealed);
    };
    <Button> Reveal Answer </Button>;
    return (
        <div>
            <Button onClick={handleReveal}>Reveal Answer</Button>
            {isRevealed && <p>42</p>}
        </div>
    );
}
