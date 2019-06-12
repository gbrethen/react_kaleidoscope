import React from 'react';
import './StringReverse.css';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function validate(string1){
    return {
        string1: string1.length === 0 || !(/^[A-Za-z]+$/.test(string1).valueOf()),
    };
}

class StringReverse extends React.Component {
    constructor() {
        super();
        this.state = { string1: '', string2: '', touched: { string1: false }};
        this.array1 = React.createRef();
    }

    shouldMarkError = (field) => {
        const errors = validate(this.state.string1);

        const hasError = errors[field];
        const shouldShow = this.state.touched[field];

        return hasError ? shouldShow : false;
    };

    handleString1Change = e => {
        this.setState({ string1: e.target.value});
    };

    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
        
    };

    canBeSubmitted() {
        const errors = validate(this.state.string1);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    handleSubmit = (e) => {
        if(this.canBeSubmitted()) { 
            e.preventDefault();
            let str1 = this.state.string1;
            
            let str2 = this.ReverseString(str1);

            this.setState({string2: str2});
        }

    };

    ReverseString(x) {
        for(var i = x.length - 1, o = ''; i >= 0; o += x[i--]) {}
        return o;
    }

    clearForm = (e) => {
        this.setState({string1: '', string2: '', touched: { string1: false }});
    }

    render() {
        
        return (
            <div id="srMain">
                <div className="jumbotron bg-light border border-secondary">
                    <h3 className="display-4">String Reverse</h3>
                    <p className="lead">This component will take a string input and reverse the string without the use of built-in functions.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group form-width">
                        <label htmlFor="string1">Input string</label>
                        <input type="text" ref={this.string1} id="string1" className={this.shouldMarkError("string1") ? "error form-control" : "form-control"} value={this.state.string1} onChange={this.handleString1Change} onBlur={this.handleBlur("string1")} pattern="^[A-Za-z]+$"  required autoFocus={true} />
                        <div className={this.shouldMarkError("array1") ? "showError" : "hideError"}><span>Invalid input!</span></div>
                    </div>
                    <button type="submit" disabled={this.isDisabled} className="btn btn-primary" >Reverse</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger "  onClick={this.clearForm}><FontAwesomeIcon icon={faRedo} aria-hidden="true"></FontAwesomeIcon> Clear</button>
                    <hr/>
                    <label htmlFor="txtResults">Reversed String</label>
                    <textarea className="form-control" id="txtResults" rows="2" value={this.state.string2} readOnly></textarea>
                </form>
        </div>
        );
    }
}

export default StringReverse;