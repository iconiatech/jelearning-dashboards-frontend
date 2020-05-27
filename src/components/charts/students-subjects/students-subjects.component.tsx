import React from "react";
import Chart from "react-apexcharts";

let options = {
    xaxis: {
        categories: ["Science", "Computer", "Literature", "Religion", "Arts", "Applied Science"]
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
        data: [33, 45, 35, 27, 24, 16]
    }
];

const StudentsSubjects: React.FC = () => {
    return <Chart
        options={options}
        series={series}
        type="bar"
        height="400"
        width="100%"
    />
}

export default StudentsSubjects;
