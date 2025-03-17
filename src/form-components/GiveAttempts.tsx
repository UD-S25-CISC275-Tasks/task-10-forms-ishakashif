import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function handleUse() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function handleGain() {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Enter number of attempts"
            />
            <button onClick={handleUse} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGain}>Gain</button>
        </div>
    );
}
