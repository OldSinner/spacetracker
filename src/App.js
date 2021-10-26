import "./styles/App.css";
import "./styles/Shorts.css";
import Layout from "./Components/Layouts/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { BreakpointProvider } from "react-socks";
import LaunchPage from "./Pages/LaunchPage";
import LaunchList from "./Pages/LaunchList";
import AgencyPage from "./Pages/AgencyPage";
import Spacestations from "./Pages/Spacestations";
import CrewPage from "./Pages/CrewPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
      <BreakpointProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/launch/:id" exact component={LaunchPage} />
              <Route path="/launchlist/" component={LaunchList} />
              <Route path="/agency/:id" exact component={AgencyPage} />
              <Route path="/spacestations/" exact component={Spacestations} />
              <Route path="/crew/:id" exact component={CrewPage} />
            </Switch>
          </Layout>
        </Router>
      </BreakpointProvider>
  );
}

export default App;
