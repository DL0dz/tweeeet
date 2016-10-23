import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Tweet from '../components/Tweet/Tweet'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Tweet} />
  </Router>
)
