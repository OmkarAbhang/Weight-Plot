import React from "react";
import Button from "react-bootstrap/Button";

function WeightInput({ weight, handleWeightChange, handleSubmit }) {
    return (
        <div className="my-app-body">
            <label>Weight (in kg):</label>
            <input
                id="weightInput"
                type="text"
                value={weight}
                onChange={handleWeightChange}
            />
            <Button
                className="dark-button"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
}

export default WeightInput;
