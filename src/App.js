import React, { Component } from 'react';
import './App.css';
import Header from './components/menu/Header';
import routes from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          {this.showContentRoute(routes)}
        </div >
      </Router>
    )
  }
  showContentRoute = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          component={route.main}
          exact={route.exact}
        />
        )
      })
    }
    return <Switch>{result}</Switch>

  }
}


export default App;
