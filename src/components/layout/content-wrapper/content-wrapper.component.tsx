import React from "react";

const ContentWrapper: React.FC = props => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            { props.children }
        </div>
    )
}

export default ContentWrapper;
