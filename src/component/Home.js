
import React, { Component } from 'react';
import axios from 'axios' ;

class Home extends Component {

    constructor() {
        super();
        this.state = {
            ckEmail: 0,
            inputUser: '',
            img1: '',
            img2:'',
            status_vote_member:'',
            emailconfirm: null,
            judul: 'DISKUUPI',
            css_vote : '',
            ip_client:null
        }
    }

    componentDidMount(){

        let url1 = 'https://diskuupi-get.netlify.com/';
        this.views_img(1);
        this.views_img(2)
        console.log(this.state.img1);
        console.log(this.state.img2);
        // https://jsonip.com/?callback

        axios.get('https://jsonip.com/?callback')
          .then( (response) => {
            
            console.log(response.data.ip)
            this.setState({
                ip_client: response.data.ip,
                // css_vote: 'text-danger'
            })
          }).catch( (error) => {
            this.setState({
                status_vote_member: "Anda Gagal Voting Logo  ",
                css_vote: 'text-danger'
            })
          })

    }

    alertNull(){
        this.setState({
            css_vote: '',
            status_vote_member: ''
        })
    }


    views_img(img_number){

        const apiUrl = 'https://ancient-meadow-31096.herokuapp.com/getmember/' + img_number;

        // Make a request for a user with a given ID
       

        fetch(apiUrl)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
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

    cekemail(img_numb){

       

        if(img_numb === 1){
            var data = {
                email: this.refs.email.value,
                usia: this.refs.usia.value,
                img_number: img_numb,
                ip_client: this.state.ip_client
    
            }
        } else {
            var data = {
                email: this.refs.email_.value,
                usia: this.refs.usia_.value,
                img_number: img_numb,
                ip_client: this.state.ip_client
    
            }

        }

        axios.post('https://ancient-meadow-31096.herokuapp.com/cekemail/', data)
        .then( (response) => {
             this.setState({
                ckEmail: response.data.length
            })
            if (response.data.length > 0){
                this.setState({
                    status_vote_member: response.data[0].email + " Anda sudah votting ",
                    css_vote: 'text-danger'
                });
            } else {
                this.cek_ip(data);
                // this.sv_data(data)
            }
        })
    }

    cek_ip(_data){

        const apiUrl = 'https://ancient-meadow-31096.herokuapp.com/cekip/';
        var data_ip = {
            ip_client: this.state.ip_client
        };
        axios.post(apiUrl, data_ip)
          .then( (response) => {
        
            // this.successVote(response)
            // this.setState({
            //     status_vote_member: _data.email+ " Anda berhasil Voting Logo "+_data.img_number+" DISKUUPI ",
            //     css_vote: 'text-primary'
            // })
            // this.componentDidMount()

            console.log(response);

            if (response.data.length > 0){
                this.setState({
                    status_vote_member: " Maaf ya... voting logo cuma bisa dilakukan 1x 🙏 ",
                    css_vote: 'text-danger'
                });
            } else {
                // this.cek_ip(data);
                this.sv_data(_data)
            }

          }).catch( (error) => {
            this.setState({
                status_vote_member: "Maaf ya... voting logo cuma bisa dilakukan 1x 🙏 ",
                css_vote: 'text-danger'
            })
          })
    }

    sv_data(_data){

        const apiUrl = 'https://ancient-meadow-31096.herokuapp.com/postmember/';
    
        axios.post(apiUrl, _data)
          .then( (response) => {
        
            // this.successVote(response) 
            this.setState({
                status_vote_member: "👌  Makasih yah sudah di bantu voting logo Diskuupi",
                css_vote: 'text-primary'
            })
            this.componentDidMount()


          }).catch( (error) => {
            this.setState({
                status_vote_member: "Maaf ya... voting logo cuma bisa dilakukan 1x 🙏",
                css_vote: 'text-danger'
            })
          })

    }



    render(){

    return (
      
        <div class="container p-5">
          
          <h3 style={{textAlign: 'center' }}>Yuk bantu kami memilih satu dari dua logo keren ini</h3>
          <p style={{textAlign: 'center' }}> 
Buat kamu yang beruntung, akan mendapatkan voucher belanja dari diskuupi loh </p>

          <div class="row p-3" align="center">
            <div class="col-lg-6 col-md-6 col-xs-6 mt-5">
            
                <img src="./img/K1.jpg" width="100%" />
                
                <div class="btn-group">

                    <button class="btn btn-outline-dark" > 
                        <i class="fa fa-users"></i> {this.state.img1}
                    </button>

                    <button type="button" class="btn btn-dark pull-right" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-check"></i>
                    </button>

                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-6 mt-5"  >
                {/* <img src="./img/diskuupi_2.png" width="400" /> */}
                <img src="./img/K2.jpg" width="100%" />
                  
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
                            
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => this.alertNull()}>
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <div clas="container">

                                <img src="./img/K2.jpg" width="100%" />
                                <small class="text-success"> * Yuk isi data diri kamu, siapa tau kamu yg beruntung dapetin voucher diskuupi</small>

                                <p class={this.state.css_vote}>{this.state.status_vote_member}</p>

                                <div class="form-group">
                                    <input type="email" class="form-control" ref="email_" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Alamat Email Kamu" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                
                                <div class="form-group">
                                    <input type="number" class="form-control" ref="usia_" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usia Kamu" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                
                                </div>

                            </div>
                        </div>

                        <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark btn-sm" data-dismiss="modal" onClick={() => this.alertNull()}>Close</button>
                        <button type="button" class="btn btn-dark btn-sm" onClick={() => {this.cekemail(2)}} ><i class="fa fa-check"></i>  Vote</button>
                        </div>

                    </div>
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => this.alertNull()}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div clas="container">
                                <img src="./img/K1.jpg" width="100%" />
                                <small class="text-success"> * Yuk isi data diri kamu, siapa tau kamu yg beruntung dapetin voucher diskuupi</small>
                                <p class={this.state.css_vote}>{this.state.status_vote_member}</p>

                                {/* <img src="./img/voucher-coffee.jpg" width="100%" /> */}

                                <div class="form-group">
                                    <input type="email" class="form-control" ref="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Alamat Email Kamu" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                
                                <div class="form-group">
                                    <input type="number" class="form-control" ref="usia" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usia Kamu" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                
                                </div>

                            </div>
                        </div>

                        <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark btn-sm " data-dismiss="modal" onClick={() => this.alertNull()}>Close</button>
                        <button type="button" class="btn btn-dark btn-sm" onClick={() => {this.cekemail(1)}} ><i class="fa fa-check"></i>  Vote</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
  );
  }
}

export default Home;
