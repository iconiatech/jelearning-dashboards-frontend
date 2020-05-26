import React from "react";

import KPICard from "../kpi-card/kpi-card.component";

const Dashboard: React.FC = () => {
    return <>
        <h1 className="h3 mb-4 text-gray-800">Home</h1>

        <div className="row">
            <KPICard 
                title="Students" 
                leadTitle="total"
                leadValue="40"
                subTitle="active"
                subValue="20"
                xlSize={4} 
                mdSize={4} 
            />
            <KPICard 
                title="Teachers" 
                leadTitle="total"
                leadValue="8"
                subTitle="active"
                subValue="2"
                xlSize={4} 
                mdSize={4} 
                color="success"
            />
            <KPICard 
                title="Subjects" 
                leadTitle="total"
                leadValue="20"
                subTitle="active"
                subValue="20"
                color="info"
                xlSize={4} 
                mdSize={4} 
            />
        </div>
    </>;
}

export default Dashboard;
