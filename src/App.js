import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Events from './Events';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/events' component={Events}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
