import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...dataPointValues);

    const chartBars = dataPoints.map((dataPoint) => {
        return (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={maxValue}
                label={dataPoint.label} 
            />
        );
    });
    
    return (
        <div className="chart">
            {chartBars}
        </div>
    );
};

export default Chart;