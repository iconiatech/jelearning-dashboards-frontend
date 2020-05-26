import React from "react";

interface KPICardProps {
    xlSize: number;
    mdSize: number;
    color?: string;
    title: string;
    leadTitle: string;
    subTitle: string;
    leadValue: string;
    subValue: string;
}

const KPICard: React.FC<KPICardProps> = ({ xlSize, mdSize, color, title, leadTitle, subTitle, leadValue, subValue }) => {
    return (
        <div className={`col-xl-${xlSize} col-md-${mdSize} mb-4`}>
            <div className={`card bg-gradient-${color} border-0"`}>
                <div className="card-body">
                    <h5 className="text-white-50">{title}</h5>
    <div className="mb-3"><span className="display-4 text-white">{leadValue}</span><span className="text-white-50"> {leadTitle}</span></div>
    <div className="text-warning"><span className="h5">{subValue}</span><span> {subTitle}</span></div>
                </div>
            </div>
        </div>
    )
}

KPICard.defaultProps = {
    color: "primary",
}

export default KPICard;
