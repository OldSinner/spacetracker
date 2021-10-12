import "./App.css";
import Layout from "./Components/Layouts/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { BreakpointProvider } from "react-socks";
import LaunchPage from "./Pages/LaunchPage";

function App() {
  return (
    <BreakpointProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path='/launch/:id' exact component={LaunchPage} />
          </Switch>
        </Layout>
      </Router>
    </BreakpointProvider>
  );
}

export default App;
