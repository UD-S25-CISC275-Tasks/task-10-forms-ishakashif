import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> origin/task-forms
}
