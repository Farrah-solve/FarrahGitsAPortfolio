import React, { Component } from 'react';
import './App.css';

import Introduction from './components/introduction'
import Animate from './components/animate'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	
				<div id="colorlib-main">
					<Introduction></Introduction>
					<Animate></Animate>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
