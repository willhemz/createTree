import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './Main'
import Footer from './Footer'
import Contact from './Contact'
import Error from './Error'

const App = () => {
  return <Router>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
  </Router> 
}

export default App
