
import React, { Component } from 'react';

class Voucher extends Component {

  constructor() {
      super();
      this.state = {
        judul: 'DISKUUPI'
      }
  }

  render(){

    return (
      <header>
        <h1>{this.state.judul}</h1>
      </header>
  );
  }
}

export default Voucher;
