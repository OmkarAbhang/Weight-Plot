import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function WeightChart({ weightLog }) {
    const data = weightLog.map((entry) => ({
        date: entry.date,
        weight: parseFloat(entry.weight),
    }));

    return (
        <div className="center">
            <h2>Weight Chart</h2>
            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    stroke="#BFBFBF"
                />
                <YAxis
                    stroke="#BFBFBF"
                    domain={[60, 75]}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="weight"
                    name="Weight (kg)"
                    stroke="#2ABB9B"
                />
            </LineChart>
        </div>
    );
}

export default WeightChart;
