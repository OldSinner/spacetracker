import "./App.css";
import Layout from "./Components/Layouts/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { BreakpointProvider } from "react-socks";

function App() {
  return (
    <BreakpointProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
          </Switch>
        </Layout>
      </Router>
    </BreakpointProvider>
  );
}

export default App;
