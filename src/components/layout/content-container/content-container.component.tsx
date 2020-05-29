import React from "react";

const ContentContainer: React.FC = props => {
    return (
        <div className="container-fluid">
            { props.children }
        </div>
    )
}

export default ContentContainer;
