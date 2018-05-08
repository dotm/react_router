import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound_404 } from './Error_Pages';
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
          <Route component={NotFound_404}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
