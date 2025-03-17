import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedChoice(selected);
        setIsCorrect(selected === expectedAnswer);
    };

    const resultText =
        isCorrect === null ? "❌ Incorrect"
        : isCorrect ? "✔️ Correct"
        : "❌ Incorrect";

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{resultText}</div>
        </div>
    );
}
