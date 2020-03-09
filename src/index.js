import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import { Home, Login, Register, withStyled, Layout } from './components'

const Root = withStyled(() => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  </Router>
))

render(<Root />, document.getElementById('app'))
