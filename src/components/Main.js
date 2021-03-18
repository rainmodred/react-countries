import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from '@emotion/styled'
import Homepage from '../pages/Homepage'
import Detail from '../pages/Detail'

const Content = styled.div`
  padding: 0 80px 20px 80px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 30px 20px 30px;
  }
`

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default function Main() {
  return (
    <Content>
      <AppRoutes />
    </Content>
  )
}
