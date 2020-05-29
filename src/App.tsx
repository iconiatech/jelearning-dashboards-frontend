import React from "react";

import Topbar from "./components/layout/topbar/topbar.component";
import Footer from "./components/layout/footer/footer.component";
import Dashboard from "./components/dashboard/dashboard.component";
import Sidebar from "./components/layout/sidebar/sidebar.component";
import MainContent from "./components/layout/main-content/main-content.component";
import ScrollToTop from "./components/layout/scroll-to-top/scroll-to-top.component";
import ContentWrapper from "./components/layout/content-wrapper/content-wrapper.component";
import ContentContainer from "./components/layout/content-container/content-container.component";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "popper.js";
import "bootstrap/dist/js/bootstrap";

const App: React.FC = () => {
  return (
    <div id="wrapper">
      	<Sidebar/>
        <ContentWrapper>
			<MainContent>
				{/* Topbar */}
				<Topbar />
				{/* Content Container */}
				<ContentContainer>
					<Dashboard />
				</ContentContainer>
			</MainContent>
			<Footer />
        </ContentWrapper>
		<ScrollToTop />
    </div>
  );
}

export default App;
