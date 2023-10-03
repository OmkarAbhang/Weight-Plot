import React, { useState, useEffect } from "react";
import "./App.css";

import CalendarInput from "./CalendarInput";
import WeightInput from "./WeightInput";
import WeightChart from "./WeightChart";
function App() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [weight, setWeight] = useState("");
    const [weightLog, setWeightLog] = useState([]); // Initialize an array to store weight data

    // Load weightLog data from localStorage on component mount
    useEffect(() => {
        const savedWeightLog = localStorage.getItem("weightLog");
        if (savedWeightLog) {
            setWeightLog(JSON.parse(savedWeightLog));
        }
    }, []);

    // Update weightLog in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("weightLog", JSON.stringify(weightLog));
    }, [weightLog]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const checkIfExists = (formattedDate, weight) => {
        weightLog.forEach((obj) => {
            if (obj.date === formattedDate) {
                obj.weight = weight;
                return true;
            }
        });
        return false;
    };

    const handleSubmit = () => {
        const formattedDate = selectedDate.toString().slice(0, 15);
        let weightEntry;

        // Check if an entry with the same date exists
        const index = weightLog.findIndex((entry) => entry.date === formattedDate);

        if (index !== -1) {
            // If found, update the existing entry
            weightLog[index].weight = weight;
            weightEntry = weightLog[index];
        } else {
            // If not found, create a new entry
            weightEntry = {
                date: formattedDate,
                weight: weight,
            };
            weightLog.push(weightEntry);
        }

        // Sort the updated array by date
        const updatedWeightLog = [...weightLog].sort((a, b) => new Date(a.date) - new Date(b.date));

        // Update the state with the sorted array
        setWeightLog(updatedWeightLog);

        // Update localStorage with the updated weightLog
        localStorage.setItem("weightLog", JSON.stringify(updatedWeightLog));

        // Reset the weight input field
        setWeight("");
    };

    return (
        <div className="App">
            <h1>Weight Tracking App</h1>
            <CalendarInput
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
            />
            <WeightInput
                weight={weight}
                handleWeightChange={handleWeightChange}
                handleSubmit={handleSubmit}
            />
            {weightLog.length !== 0 ? <WeightChart weightLog={weightLog} /> : <p>Enter Weight</p>}{" "}
            {/* Add this line */}
        </div>
    );
}

export default App;
