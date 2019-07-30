
import React, { Component } from 'react';

class Home extends Component {

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
      
        <div class="container p-5">
          
          <h3 style={{textAlign: 'center' }}>Vote Kedai Logo </h3>
          <p style={{textAlign: 'center' }}> Daparkan Gratis Voucher dengan memilih Logo Diskupi</p>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-xs-6">
                <img src="./img/diskuupi_1.png" width="100%" />
                  
                <button class="btn btn-outline-dark"> 
                    <i class="fa fa-users"></i> 30
                </button>

                <button type="button" class="btn btn-dark pull-right" data-toggle="modal" data-target="#exampleModal">
                    <i class="fa fa-check"></i> 
                </button>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-6">
                {/* <img src="./img/diskuupi_2.png" width="400" /> */}
                <img src="./img/diskuupi_2.png" width="100%" />
                  
                  <button class="btn btn-outline-dark"> 
                    <i class="fa fa-users"></i> 30
                  </button>

                  <button type="button" class="btn btn-dark pull-right" data-toggle="modal" data-target="#exampleModal">
                    <i class="fa fa-check"></i>
                  </button>

                
              </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" >{this.state.judul}</h5>
                        <br />

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                        <small class="text-danger"> * Masukkan data untuk mendapatkan voucher</small>
                        <div clas="container">
                            {/* <img src="./img/voucher-coffee.jpg" width="100%" /> */}

                                <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div class="form-group">
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usia" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                
                                </div>

                        </div>
                        </div>

                        <div class="modal-footer">
                        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                        <button type="button" class="btn btn-dark btn-sm"><i class="fa fa-check"></i>  Vote</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
  );
  }
}

export default Home;
