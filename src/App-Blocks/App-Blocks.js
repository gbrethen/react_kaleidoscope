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
                        <p className="card-text">This module accepts 2 arrays as input and displays the common integers in both arrays.  Click this block to try.</p>
                    </div>
                </div>
                <br />
                <div className="card border-secondary card-button" onClick={ (x) => this.props.func('showCB')}>
                    <div className="card-body">
                        <h5 className="card-title">Checkerboard</h5>
                        <p className="card-text">This module utilizes loops to generate a checkerboard.  Click this block to try.</p>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default AppBlocks;