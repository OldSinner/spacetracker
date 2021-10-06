import './App.css';
import Layout from "./Components/Layouts/Layout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"
function App() {
  return (
    <Router>
    <Layout>
      <Switch>
      <Route path='/' exact component={MainPage}/>
      </Switch>
    </Layout>
  </Router>
  );
}

export default App;
