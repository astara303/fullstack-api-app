import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'
import QuotesIndex from './components/quotes/QuotesIndex'
import QuoteShow from './components/quotes/QuoteShow'
import QuoteNew from './components/quotes/QuoteNew'
import QuoteEdit from './components/quotes/QuoteEdit'
import ErrorPage from './components/common/ErrorPage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <SecureRoute path="/quotes/:id/edit" component={QuoteEdit} />
        <SecureRoute path="/quotes/new" component={QuoteNew} />
        <Route path="/quotes/:id" component={QuoteShow} />
        <Route path="/quotes" component={QuotesIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

