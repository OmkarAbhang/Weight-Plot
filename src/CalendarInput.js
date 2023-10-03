import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarInput({ selectedDate, handleDateChange }) {
    return (
        <div>
            <label>Date:</label>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
}

export default CalendarInput;
