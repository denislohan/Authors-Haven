import $ from 'jquery';
const React = require('react')

require('../css/chat.scss')


class Signup extends React.Component{

  constructor () {
    super()
    this.state = {
      
          username : '',
           password : ''
      

  }
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handlePasswordChange (e) {
    this.setState({ password: e.target.value });
  }

  handleEmailChange (e) {
    this.setState({ username: e.target.value });
  }


   componentDidMount(){
        $('.email').on("change keyup paste",
            function(){
            if($(this).val()){
                $('.icon-paper-plane').addClass("next");
            } else {
                $('.icon-paper-plane').removeClass("next");
            }
            }
        );
    
        $('.next-button').hover(
            function(){
            $(this).css('cursor', 'pointer');
            }
        );
    
    $('.next-button.email').click(
        function(){
        console.log("Something");
        $('.email-section').addClass("fold-up");
        $('.password-section').removeClass("folded");
        }
    );
    
    $('.password').on("change keyup paste",
        function(){
        if($(this).val()){
            $('.icon-lock').addClass("next");
        } else {
            $('.icon-lock').removeClass("next");
        }
        }
    );
    
    $('.next-button').hover(
        function(){
        $(this).css('cursor', 'pointer');
        }
  );
  
  $('.next-button.password').click(
    function(){
      $('.password-section').addClass("fold-up");
      $('.repeat-password-section').removeClass("folded");
    }
  );
  
  $('.repeat-password').on("change keyup paste",
    function(){
      if($(this).val()){
        $('.icon-repeat-lock').addClass("next");
      } else {
        $('.icon-repeat-lock').removeClass("next");
      }
    }
  );
  
  $('.next-button.repeat-password').click(
    function(){
      console.log("Something");
      $('.repeat-password-section').addClass("fold-up");
      $('.success').css("marginTop", 0);
    }
  );
  $('#account_success').click(()=>{
    $('#account_success').css('display','none')
  });

  $('#form_signup').click((e)=>{
    this.handleSubmit(e);
  });
   }

  
   handleSubmit=(e)=>{
    e.preventDefault();

    //console.log(this.state)
    $.ajax({
      url: 'http://localhost:3001/api/user/signup',
      data: this.state,
      method: 'POST',
      header: 'Access-Control-Allow-Origin: *',
      success: (response)=>{
        console.log(response.id || response)
        if(response.id){
          //window.location = '/chat'
          this.props.history.push('/chat')
        }
      }
    })
   }

//    changeHandler = event => {
//     const name = event.target.name;
//     const value = event.target.value;

//     console.log('name -----' + name)
//     console.log('value -----' + value)


  
//     this.setState({
//         formControls: {
//           [name]: value
//         }
//     });
  
// }


    render(){
        return (
            <div>
                <div className="back"></div>
                    <div className="registration-form">
                        <header>
                            <h1>Sign Up</h1>
                            <p>Fill in all informations</p>
                        </header>
                        <form onSubmit={this.handleSubmit}>

                            <div className="input-section email-section">
                              <input className="email" type="text" name ="username" placeholder="ENTER YOUR Username Here" autoComplete="off"
                                onChange={this.handleEmailChange}
                              />
                            
                              <div className="animated-button">
                                <span className="icon-paper-plane">
                                  <i className="fa fa-envelope-o"></i>
                                </span>
                                
                                <span className="next-button email"><i className="fa fa-arrow-up"></i>
                                </span>
                              </div>
                            
                            </div>


                            <div className="input-section password-section folded">
                              <input className="password" type="password" name="password" placeholder="ENTER YOUR PASSWORD HERE"
                                onChange={this.handlePasswordChange} 
                              />
                              <div className="animated-button">
                                <span className="icon-lock">
                                  <i className="fa fa-lock"></i>
                                </span>
                                
                                <span className="next-button password"><i className="fa fa-arrow-up"></i>
                                </span>
                              </div>
                            </div>
                            <div className="input-section repeat-password-section folded">
                            <input className="repeat-password" type="password" name="password_repeat" placeholder="REPEAT YOUR PASSWORD HERE"
                            // value={this.state.formControls.password_repeat.value} 
                            // onChange={this.changeHandler} 
                            />
                            <div className="animated-button"><span className="icon-repeat-lock"><i className="fa fa-lock"></i></span><span className="next-button repeat-password"><i className="fa fa-paper-plane"></i></span></div>
                            </div>

                            <button id = 'form_signup'>
                                <i className="fa fa-arrow-circle-right fa-lg"></i> Create
                            </button>
                            {/* <div className="success" id = 'account_success'> 
                            <p>ACCOUNT CREATED</p>
                            </div> */}
                        </form>
                    </div>
                </div>
          );
    }

}

export default Signup