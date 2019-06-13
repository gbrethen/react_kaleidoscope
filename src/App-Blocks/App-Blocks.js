import React from 'react';
import './App-Blocks.css';

class AppBlocks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="card border-secondary card-button" onClick={ (x) => this.props.func('showCE')}>
                    <div className="card-body">
                        <h5 className="card-title">Common Elements</h5>
                        <p className="card-text">This module accepts 2 arrays as input and displays the common integers in both arrays.  <i>Click this block to try.</i></p>
                    </div>
                </div>
                <br />
                <div className="card border-secondary card-button" onClick={ (x) => this.props.func('showCB')}>
                    <div className="card-body">
                        <h5 className="card-title">Checkerboard</h5>
                        <p className="card-text">This module utilizes loops to generate a checkerboard.  <i>Click this block to try.</i></p>
                    </div>
                </div>
                <br />
                <div className="card border-secondary card-button" onClick={ (x) => this.props.func('showSR')}>
                    <div className="card-body">
                        <h5 className="card-title">String Reverse</h5>
                        <p className="card-text">This module reverses a string without built-in functions.  <i>Click this block to try.</i></p>
                    </div>
                </div>
                <br />
                <div className="card border-secondary card-button" onClick={ (x) => this.props.func('showPD')}>
                    <div className="card-body">
                        <h5 className="card-title">Palindrome</h5>
                        <p className="card-text">This module will check if input string is a palindrome.  <i>Click this block to try.</i></p>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default AppBlocks;