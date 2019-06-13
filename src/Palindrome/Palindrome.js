import React from 'react';
import './Palindrome.css';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReverseString } from '../ReverseString';

function validate(string1){
    return {
        string1: string1.length === 0 || !(/^[A-Za-z]+$/.test(string1).valueOf()),
    };
}

class Palindrome extends React.Component {
    constructor() {
        super();
        this.state = { string1: '', isPalindrome: 1, touched: { string1: false }};
        this.string1 = React.createRef();
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
            
            let str2 = ReverseString(str1);

            if(str1.toLowerCase() === str2.toLowerCase())
                this.setState({isPalindrome: 2});
            else
                this.setState({isPalindrome: 3});
        }

    };

    answer = () => {
        return this.state.isPalindrome;
    }

    clearForm = (e) => {
        this.setState({string1: '', isPalindrome: 1, touched: { string1: false }});
    }

    render() {
        
        return (
            <div id="pdMain">
                <div className="jumbotron bg-light border border-secondary">
                    <h3 className="display-4">Palindrome</h3>
                    <p className="lead">This component will take a string input and determine if the string is a palindrome using recursion.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="string1">Input string</label>
                        <input type="text" ref={this.string1} id="string1" className={this.shouldMarkError("string1") ? "error form-control" : "form-control"} value={this.state.string1} onChange={this.handleString1Change} onBlur={this.handleBlur("string1")} pattern="^[A-Za-z]+$"  required autoFocus={true} />
                        <div className={this.shouldMarkError("array1") ? "showError" : "hideError"}><span>Invalid input!</span></div>
                    </div>
                    <button type="submit" disabled={this.isDisabled} className="btn btn-primary" >Verify</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger "  onClick={this.clearForm}><FontAwesomeIcon icon={faRedo} aria-hidden="true"></FontAwesomeIcon> Clear</button>
                    <br /><br /><br />
                    <div className="result clearfix">
                        <div id="yes" className={this.state.isPalindrome == 2 ? 'pulseit' : ''}> Yes </div>
                        <div id="no" className={this.state.isPalindrome == 3 ? 'pulseit' : ''}> No </div>
                    </div>
                </form>
        </div>
        );
    }
}

export default Palindrome;