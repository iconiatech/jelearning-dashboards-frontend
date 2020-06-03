import React from "react";

import SidebarLinks from "../sidebar-links/sidebar-links.component";


const Sidebar: React.FC = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#!">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-fw fa-chart-area" />
                </div>
                <div className="sidebar-brand-text mx-3">E-Learning</div>
            </a>
  
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
  
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <a className="nav-link" href="#!">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Home</span>
                </a>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">
                Analytics Dashboards
            </div>

            {/* Nav Item - Admin Collapse Menu */}
            { <SidebarLinks /> }
  
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
  
        </ul>
    );
}

export default Sidebar;
