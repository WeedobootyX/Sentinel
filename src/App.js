import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom'; 
import { connect } from 'react-redux';

import * as AsyncComponents from './containers/asyncComponentImports'; 

import Layout from './hoc/Layout/Layout'; 
import LandingView from './components/LandingView/LandingView'; 

class App extends Component {
  
  render() {    

    if(window.soundManager){
    window.soundManager.setup({debugMode: false}); // Remove react-sound debugging text
  }

  let routes = (
    <Switch>
      <Route path='/'/>
    </Switch>
  ); 

  if(this.props.isAuthenticated){
    routes = (
      <Switch>
        <Route path='/dashboard/:siteKey' component={AsyncComponents.Dashboard} />
        <Route path='/alarm/:siteKey' component={AsyncComponents.Alarm} />
        <Route path='/' />
      </Switch>
    );
  }

    return (
        <Layout>
          {routes}
        </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: true
  }
}

export default withRouter(connect(mapStateToProps)(App));
