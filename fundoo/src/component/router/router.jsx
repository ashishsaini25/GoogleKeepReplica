import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../../pages/dashboard/signin/signin'
import Signup from '../../pages/signup/signup'
import Dashboard from '../../pages/dashboard/home'
function Router() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router