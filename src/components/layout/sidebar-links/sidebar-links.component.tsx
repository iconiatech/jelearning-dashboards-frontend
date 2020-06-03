import React from "react";
import { connect } from "react-redux";

import { RootState } from "../../../redux/root-reducer";
import { UserState } from "../../../redux/modules/user/user";

interface SidebarLinksProps {
    user: UserState;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ user }) => {
    switch (user.type) {
        case "admin":
            return (
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i className="fas fa-user-cog" />
                        <span>Admin</span>
                    </a>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Admin Dashboards:</h6>
                            <a className="collapse-item" href="#!">Teachers</a>
                            <a className="collapse-item" href="#!">Students</a>
                            <a className="collapse-item" href="#!">Grades</a>
                        </div>
                    </div>
                </li>
            );
        default:
            return (
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i className="fas fa-user-cog" />
                        <span>{user.type.toUpperCase()}</span>
                    </a>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">{user.type} Dashboards:</h6>
                            <a className="collapse-item" href="#!">Teachers</a>
                            <a className="collapse-item" href="#!">Students</a>
                            <a className="collapse-item" href="#!">Grades</a>
                        </div>
                    </div>
                </li>
            );
    }
    
}

const mapStateToProps = (state: RootState) => ({
    user: state.user
});

export default connect(mapStateToProps)(SidebarLinks);
