import "./App.css";
import { Route, Switch } from "react-router";

// components
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            Main app
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
