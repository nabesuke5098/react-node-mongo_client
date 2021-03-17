import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import TopPage from './pages/toppage/toppage';
import Footer from './components/footer/footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={TopPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
