import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom'; 
import { connect } from 'react-redux';

import * as AsyncComponents from './containers/asyncComponentImports'; 

import Layout from './hoc/Layout/Layout'; 

class App extends Component {
  
  render() {    

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
          <Route path='/device/:siteKey/:deviceKey' component={AsyncComponents.Device} />
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
