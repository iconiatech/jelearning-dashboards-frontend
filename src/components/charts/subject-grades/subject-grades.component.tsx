import React from "react";
import Chart from "react-apexcharts";

let options = {
    xaxis: {
        categories: ["Biology", "Chemistry", "Kiswahili", "Mathematics", "English", "Physics"]
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    }
};

let series = [
    {
        name: "Avg Grade",
        data: [73, 75, 82, 48, 59, 68]
    }
];

const SubjectGrades: React.FC = () => {
    return <Chart 
        options={options}
        series={series}
        type="bar"
        height="400"
        width="100%"
    />
}

export default SubjectGrades;
