import React from 'react';
import './App.css';
import logo from './img/kaleidoscopeLogo.png';
import '../App-Blocks/App-Blocks';
import AppBlocks from '../App-Blocks/App-Blocks';
import CommonElements from '../CommonElements/CommonElements';
import CheckerBoard from '../CheckerBoard/CheckerBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleComponent = this.toggleComponent.bind(this);
    
    this.state = { showCE: false, showCB: false, };
  }

  toggleComponent(x) {
    switch(x) {
      case 'showCE':
        this.setState({ showCE: !this.state.showCE, showCB: false});
        break;
      case 'showCB':
        this.setState({ showCB: !this.state.showCB, showCE: false});
        break;
    }
    
  }

  showCE() {
    return this.state.showCE;
  }

  showCB() {
    return this.state.showCB;
  }

  render() {
      return (
      <div id="main">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} className="App-logo" width="80" height="80" alt="Kaleidoscope" /> React-Kaleidoscope
          </span>
        </nav>
        <div id="container">
          <div className="floater" id="leftNav">
            <AppBlocks func={this.toggleComponent} />
          </div>
          <div className="floater" id="displayArea">
            <div id="storage">
              <div className={ this.showCE() ? "showComponent" : "hideComponent"}>
                <CommonElements />
              </div>
              <div className={ this.showCB() ? "showComponent" : "hideComponent"}>
                <CheckerBoard />
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default App;
