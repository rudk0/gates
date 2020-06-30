import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Switch,
  Route,
} from "react-router-dom";


import Page from "./components/Page";
import {LogTable} from "./components/LogTable";


function App(props) {
  const {location} = props;
  return (
    <Switch location={location}>
      <Route path={'/'} exact={true} component={Page}/>
      <Route path={'/logs'} component={LogTable}/>
    </Switch>
  );
}

export default App;
