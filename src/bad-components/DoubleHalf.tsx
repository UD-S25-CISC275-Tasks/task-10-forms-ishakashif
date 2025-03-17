import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

function Doubler({
    setDhValue,
}: {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Button
            onClick={() => {
                setDhValue((prev) => prev * 2);
=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
>>>>>>> origin/task-forms
            }}
        >
            Double
        </Button>
    );
}

<<<<<<< HEAD
function Halver({
    setDhValue,
}: {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Button
            onClick={() => {
                setDhValue((prev) => prev * 0.5);
=======
function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
>>>>>>> origin/task-forms
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
<<<<<<< HEAD
    const [dhValue, setDhValue] = useState<number>(10);

=======
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
<<<<<<< HEAD
            <Doubler setDhValue={setDhValue} />
            <Halver setDhValue={setDhValue} />
=======
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> origin/task-forms
        </div>
    );
}
