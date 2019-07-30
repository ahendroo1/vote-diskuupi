
import React, { Component } from 'react';
import axios from 'axios' ;

class Home extends Component {

  constructor() {
      super();
      this.state = {
        resto: [],
        inputUser: '',
        img1: '',
        img2:'',
        judul: 'DISKUUPI'
      }
  }

  componentDidMount(){

    this.views_img(1)
    this.views_img(2)

  }

    views_img(img_number){

        const apiUrl = 'http://localhost/diskuupi/index.php/api/img_number/'+ img_number;

        fetch(apiUrl)
        .then(res => res.json())
        .then(
            (result) => {
                // console.log(result.length);
                if(img_number > 1){

                    this.setState({
                        img2: result.length
                    });

                } else {

                    this.setState({
                        img1: result.length
                    });
                }
            },
            (error) => {
                this.setState({ error });
            }
        )

    }

  render(){

    return (
      
        <div class="container p-5">
          
          <h3 style={{textAlign: 'center' }}>Vote Kedai Logo {this.state.inputUser}</h3>
          <p style={{textAlign: 'center' }}> Daparkan Gratis Voucher dengan memilih Logo Diskupi</p>

          <div class="row p-3" align="center">
            <div class="col-lg-6 col-md-6 col-xs-6">
            
            <h2 class="pull-left">1</h2>
                <img src="./img/diskuupi_1.png" width="100%" />
                
                <div class="btn-group">

                    <button class="btn btn-outline-dark" > 
                        <i class="fa fa-users"></i> {this.state.img1}
                    </button>

                    <button type="button" class="btn btn-dark pull-right" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-check"></i>
                    </button>

                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-6"  >
            <h2 class="pull-left">2</h2>
                {/* <img src="./img/diskuupi_2.png" width="400" /> */}
                <img src="./img/diskuupi_2.png" width="100%" />
                  
                    <div class="btn-group">

                        <button class="btn btn-outline-dark" > 
                            <i class="fa fa-users"></i>  {this.state.img2}
                        </button>

                        <button type="button" class="btn btn-dark pull-right" data-toggle="modal" data-target="#exampleModal2">
                            <i class="fa fa-check"></i>
                        </button>
                    </div>

              </div>
            </div>

            <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Logo 2</h5>
                            
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <div clas="container">

                                <img src="./img/diskuupi_2.png" width="100%" />
                                <small class="text-danger"> * Masukkan data untuk mendapatkan voucher</small>

                                <div class="form-group">
                                    <input type="email" class="form-control" ref="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                
                                <div class="form-group">
                                    <input type="number" class="form-control" ref="usia" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usia" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                
                                </div>

                            </div>
                        </div>

                        <div class="modal-footer">
                        {/* <button type="button" class="btn btn-outline-dark btn-sm" data-dismiss="modal">Close</button> */}
                        <button type="button" class="btn btn-dark btn-sm" onClick={() => {this.sv_data()}} ><i class="fa fa-check"></i>  Vote</button>
                        </div>

                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Logo 1</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div clas="container">
                                <img src="./img/diskuupi_1.png" width="100%" />
                                <small class="text-danger"> * Masukkan data untuk mendapatkan voucher</small>

                                {/* <img src="./img/voucher-coffee.jpg" width="100%" /> */}

                                <div class="form-group">
                                    <input type="email" class="form-control" ref="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                
                                <div class="form-group">
                                    <input type="number" class="form-control" ref="usia" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usia" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                
                                </div>

                            </div>
                        </div>

                        <div class="modal-footer">
                        {/* <button type="button" class="btn btn-outline-dark btn-sm " data-dismiss="modal">Close</button> */}
                        <button type="button" class="btn btn-dark btn-sm" onClick={() => {this.sv_data()}} ><i class="fa fa-check"></i>  Vote</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
  );
  }
}

export default Home;
