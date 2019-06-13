import React from 'react';
import './App.css';
import logo from './img/kaleidoscopeLogo.png';
import '../App-Blocks/App-Blocks';
import AppBlocks from '../App-Blocks/App-Blocks';
import CommonElements from '../CommonElements/CommonElements';
import CheckerBoard from '../CheckerBoard/CheckerBoard';
import StringReverse from '../StringReverse/StringReverse';
import Palindrome from '../Palindrome/Palindrome';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleComponent = this.toggleComponent.bind(this);
    
    this.state = { showCE: false, showCB: false, showSR: false, showPD: false };
  }

  toggleComponent(x) {
    switch(x) {
      case 'showCE':
        this.setState({ showCE: !this.state.showCE, showCB: false, showSR: false, showPD: false });
        break;
      case 'showCB':
        this.setState({ showCB: !this.state.showCB, showCE: false, showSR: false, showPD: false });
        break;
      case 'showSR':
        this.setState({ showCB: false, showCE: false, showSR: !this.state.showSR, showPD: false });
        break;
        case 'showPD':
          this.setState({ showPD: !this.state.showPD, showCB: false, showCE: false, showSR: false });
          break;
    }
    
  }

  showCE() {
    return this.state.showCE;
  }

  showCB() {
    return this.state.showCB;
  }

  showSR() {
    return this.state.showSR;
  }

  showPD() {
    return this.state.showPD;
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
              <div className={ this.showSR() ? "showComponent" : "hideComponent"}>
                <StringReverse />
              </div>
              <div className={ this.showPD() ? "showComponent" : "hideComponent"}>
                <Palindrome />
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default App;
