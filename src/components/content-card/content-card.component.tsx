import React from "react";
import PropTypes from "prop-types";

interface ContentCardProps {
    color?: string;
    title: string;
    classses?: string;
}

const ContentCard: React.FC<ContentCardProps> = props => {
    return (
        <div className={`card shadow mb-4 ${props.classses}`}>
            <div className="card-header py-3">
                <h6 className={`m-0 font-weight-bold text-${props.color}`}>{ props.title }</h6>
            </div>
            <div className="card-body">
                { props.children }
                <hr />
                <code>{ props.title }</code>.
            </div>
        </div>
    )
}

ContentCard.defaultProps = {
    title: "Title here...",
    color: "primary",
}

ContentCard.propTypes = {
    color: PropTypes.string,
    classses: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default ContentCard;
