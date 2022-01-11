import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Details from "./views/Details/Details.jsx";
import List from "./views/List/List.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/details/:id'>
          <Details />
        </Route>

        <Route exact path='/'>
          <List />
        </Route>

      </Switch>
    </BrowserRouter>
  )
  }
