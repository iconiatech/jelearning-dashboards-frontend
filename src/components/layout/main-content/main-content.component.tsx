import React from "react";

const MainContent: React.FC = props => {
    return (
        <div id="content">
           { props.children }
        </div>
    )
}

export default MainContent;
