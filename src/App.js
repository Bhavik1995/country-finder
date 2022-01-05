
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Countries from './components/Countries';
import Country from './components/Country';
import Filter from './components/Filter';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/countries/:capital" children={<Country />}></Route>
      </>
  </Router>
  )
}

export default App
