import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Album from "./containers/Album/Album";
import Artist from "./containers/Artist/Artist";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Artists} />
                <Route path="/artist/:id" exact component={Artist} />
                <Route path="/album/:id" exact component={Album}/>
            </Switch>
        </Fragment>
    );
  }
}

export default App;