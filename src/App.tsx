import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { RootState } from "./redux/root-reducer";
import { UserState } from "./redux/modules/user/user";

import Login from "./components/pages/login/login.component";
import Topbar from "./components/layout/topbar/topbar.component";
import Footer from "./components/layout/footer/footer.component";
import Sidebar from "./components/layout/sidebar/sidebar.component";
import Dashboard from "./components/pages/dashboard/dashboard.component";
import MainContent from "./components/layout/main-content/main-content.component";
import ScrollToTop from "./components/layout/scroll-to-top/scroll-to-top.component";
import ContentWrapper from "./components/layout/content-wrapper/content-wrapper.component";
import ContentContainer from "./components/layout/content-container/content-container.component";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "popper.js";
import "bootstrap/dist/js/bootstrap";

interface AppProps {
	user: UserState;
}

const App: React.FC<AppProps> = ({ user }) => {

	if (!user.isAuthenticated) {
		return (
			<Login />
		)
	}

	return (
		<div id="wrapper">
			<Sidebar/>
			<ContentWrapper>
				<MainContent>
					{/* Topbar */}
					<Topbar />
					{/* Content Container */}
					<ContentContainer>
						<Switch>
							<Route exact path="/" component={Dashboard} />
						</Switch>
					</ContentContainer>
				</MainContent>
				<Footer />
			</ContentWrapper>
			<ScrollToTop />
		</div>
	);
}

const mapStateToProps = (state: RootState) => ({
	user: state.user,
});

export default connect(mapStateToProps)(App);
