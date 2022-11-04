import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Contact from './Contact'

const App = () => {
  return <Router>
    <div className='container-fluid mx-0 my-0'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router> 
}

export default App
