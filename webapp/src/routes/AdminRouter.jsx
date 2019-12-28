import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import IndicePanel from '../pages/IndicePanel';

import DocApi from '../pages/DocApi';
import GraphPanel from '../pages/GraphPanel';
import SystemPanel from '../pages/SystemPanel';
export default class AdminRouter extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/admin' component={Dashboard} />
        <Route  path='/admin/indices' component={IndicePanel} />
        <Route  exact path='/admin/chart' component={GraphPanel} />
        <Route   path='/admin/api' component={DocApi} />
        <Route   path='/admin/system' component={SystemPanel} />
    </Switch>
    )
  }
}