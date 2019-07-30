
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
      <header>

          <nav class="bg-navbar navbar navbar-expand-lg navbar-light ">

            {/* <p class="text-white">DISKUUPI</p> */}
            
            <div className="container">
              <div class="navbar-nav mr-auto">
                <div class="nav-item active">
                  <a class="nav-link" class="text-white" href="#">{this.state.judul} <span class="sr-only"></span></a>
                </div>
              </div>
            </div>

          </nav>

          <Route exact path="/" component={IndexPage} />
          <Route exact path="/voucher" component={Voucher} />

      </header>
  );
  }
}

export default App;
