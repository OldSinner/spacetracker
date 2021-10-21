import "./styles/App.css";
import "./styles/Shorts.css";
import Layout from "./Components/Layouts/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { BreakpointProvider } from "react-socks";
import LaunchPage from "./Pages/LaunchPage";
import LaunchList from "./Pages/LaunchList";
import AgencyPage from "./Pages/AgencyPage";
import AgencyList from "./Pages/AgencyList";

function App() {
  return (
    
      <BreakpointProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/launch/:id" exact component={LaunchPage} />
              <Route path="/launchlist/"  component={LaunchList} />
              <Route path='/agency/:id' exact component ={AgencyPage}/>
              <Route path='/agency' exact component={AgencyList} />
            </Switch>
          </Layout>
        </Router>
      </BreakpointProvider>
    
  );
}

export default App;
