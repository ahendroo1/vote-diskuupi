
import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import IndexPage from './component/Home';
import Voucher from './component/Voucher';

class App extends Component {

  constructor() {
      super();
      this.state = {
        resto: [],
        inputUser: '',
        judul: 'DISKUUPI'
      }
  }

  render(){

    return (

      <div>
          <image src="./img_comingsoon.jpeg" width="100%" />
      </div>
      
  );
  }
}

export default App;
