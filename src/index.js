import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Portfolioproject3 from './views/portfolioproject3'
import PortfolioAboutpage from './views/portfolio-aboutpage'
import Portfolio from './views/portfolio'
import Portfolioproject2 from './views/portfolioproject2'
import Portfolioproject1 from './views/portfolioproject1'
import NotFound from './views/not-found'

const App = () => {
  return (
    <BrowserRouter basename="/kylo-website-2024-React">
      <Switch>
        <Route component={Portfolioproject3} exact path="/portfolioproject3" />
        <Route
          component={PortfolioAboutpage}
          exact
          path="/portfolio-aboutpage"
        />
        <Route component={Portfolio} exact path="/" />
        <Route component={Portfolioproject2} exact path="/portfolioproject2" />
        <Route component={Portfolioproject1} exact path="/portfolioproject1" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
