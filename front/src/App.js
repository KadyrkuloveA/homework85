import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Album from "./containers/Album/Album";
import Artist from "./containers/Artist/Artist";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import TrackHistory from "./containers/TrackHistory/TrackHistory";

class App extends Component {
  render() {
    return (
        <Fragment>
            <header>
                <Toolbar/>
            </header>
            <div className="container mt-5">
                <Switch>
                    <Route path="/" exact component={Artists} />
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/artist/:id" exact component={Artist} />
                    <Route path="/album/:id" exact component={Album}/>
                    <Route path="/track_history" exact component={TrackHistory}/>
                </Switch>
            </div>
        </Fragment>
    );
  }
}

export default App;