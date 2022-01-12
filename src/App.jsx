import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "./components/Layout/Layout.jsx";
import Details from "./views/Details/Details.jsx";
import List from "./views/List/List.jsx";
import './App.css'


export default function App() {
  return (
    <Layout>
        <Switch>

          <Route path='/details/:id'>
            <Details />
          </Route>

          <Route exact path='/'>
            <List />
          </Route>

        </Switch>
    </Layout>
  )
  }
