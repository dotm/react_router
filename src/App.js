import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Careers from './Careers';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/careers' component={Careers}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
