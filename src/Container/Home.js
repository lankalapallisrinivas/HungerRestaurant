import React, { Component } from 'react';

class Home extends Component{
    render() {
        let homestylesSection={padding:"30px"};
        return(
<React.Fragment>
            <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <nav className="hdrNav">
			<ul className="pull-right list-unstyled list-inline">
				<li><a title="Login" href="login.html"><strong>Login</strong></a></li>
				<li><a title="Register" href="javascript:void(0)" onClick='signupFun();'><strong>Sign Up</strong></a></li>

			</ul>  
		</nav>
		 <div className="row">
        <div className="col-lg-12 mx-auto">
			<div className="logoOperox">
				<img src="images/operoxLogo.png" alt="Operox Logo" />
			</div>	
		</div>
        </div>
      </div>
		
		<div className="location-div">
			<div className="location-divInner">
				<div className="positionRelative locationInput">
				<input type="text" placeholder="Enter Your Delivery Location" />
					<i className="material-icons locIcon">&#xe0c8;</i>
				</div>
				<button type="button" class="btn btn-primary">Find Food</button>
				
			</div>
		
			</div>
    </header>
    <div className="clearfix"></div>
    <section className="bg-primary" style={{ padding: "20px 0px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto text-center">
            <h2 className="section-heading text-white">.:: Welcome to Food Restaurant ::.</h2>
            <h5 className="text-light text-white">We've got what you need !</h5>
            <hr className="light my-4" />
            <p className="text-faded mb-4">Dear guests, you are welcomed to dine with us at Good Food restaurant. We will serve you with the mouth watering dishes.  Have a pleasant dining experience.</p>
          </div>
        </div>
      </div>
    </section>

    </ React.Fragment>

        )
    }
}

export default Home;