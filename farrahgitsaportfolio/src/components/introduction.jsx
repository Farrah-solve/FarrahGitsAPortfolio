import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (


<div>
  <title>Farrah-solve Portfilio</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <div className="header-div">
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header logo-div bounceInLeft wow" data-wow-duration="2s">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">Farrah-solve (Farrah Heath)</a>
        </div>
        <div className="collapse navbar-collapse top-right-menu-ul bounceInRight wow" id="bs-example-navbar-collapse-1" data-wow-duration="4s">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#features">Features</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Call-to-Action">Call to Action</a></li>
            <li><a href="#Price">Price</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Testimonial">Testimonial</a></li>
            <li><a href="#">Button</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container wow bounceInDown" data-wow-duration="5s">
      <div className="row">
        <div className="col-md-offset-2 col-md-8 text-center slide-text">
          <h1>Farrah-solve Resume</h1>
          <p>What you need to know about Farrah Heath for hire.</p>
        </div>
        <div className="col-md-offset-2" />
      </div>
    </div>
  </div>
  <div className="container" id="features">
    <div className="row">
      <div className="col-md-12">
        <div className="main_heading">
          <h1>Features</h1>
          <div className="text-center"><span className="underline" /></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="features-div">
          <i className="fa fa-mobile" />
          <h4>Responsive Design</h4>
          <p>This page is only one example.</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="features-div">
          <i className="fa fa-code" />
          <h4>Clean Code</h4>
          <p>Attention to quality is my thing.</p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="features-div">
          <i className="fa fa-life-ring" />
          <h4>Personalized Support</h4>
          <p>Contact me by phone, text or email.</p>
        </div>			
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="features-div">
          <i className="fa fa-pencil" />
          <h4>Modern Design</h4>
          <p>No old habits to break here. I keep learning so i can serve you with what is relevent today and tomorrow.</p>
        </div>			
      </div>
    </div>
  </div>
  <div className="more-feature-div">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="images/macbook.png" />
        </div>
        <div className="col-md-6">
          <div className="more-features-div">
            <div className="more-features-div-icon"><i className="fa fa-rocket" /></div>
            <h3 className="more-features-div-heading">Websites, Apps and Databases</h3>
            <div className="more-features-div-description">
              You came to the right place.
            </div>
          </div>
          <div className="more-features-div">
            <div className="more-features-div-icon"><i className="fa fa-rocket" /></div>
            <h3 className="more-features-div-heading">Customization</h3>
            <div className="more-features-div-description">
              Whether for business, personal or self-promotion, let it be yours.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


)}}