import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];

    const [selectedColor, setSelectedColor] = useState<string>("red");

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label
                        key={color}
                        style={{ marginRight: "10px", display: "inline-block" }}
                    >
                        <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={handleColorChange}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: selectedColor,
                    color:
                        (
                            selectedColor === "yellow" ||
                            selectedColor === "orange"
                        ) ?
                            "black"
                        :   "white",
                }}
            >
                The box is now {selectedColor}
            </div>
        </div>
    );
}
