import React from 'react';
import './CommonElements.css';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function validate(array1, array2){
    return {
        array1: array1.length === 0 || !(/^([0-9]+,?)+$/.test(array1).valueOf()),
        array2: array2.length === 0 || !(/^([0-9]+,?)+$/.test(array2).valueOf())
    };
}

class CommonElements extends React.Component {
    constructor() {
        super();
        this.state = { array1: '', array2: '', array3: '', touched: { array1: false, array2: false,}};
        this.array1 = React.createRef();
    }

    shouldMarkError = (field) => {
        const errors = validate(this.state.array1, this.state.array2);

        const hasError = errors[field];
        const shouldShow = this.state.touched[field];

        return hasError ? shouldShow : false;
    };

    handleArray1Change = e => {
        this.setState({ array1: e.target.value});
    };

    handleArray2Change = e => {
        this.setState({ array2: e.target.value});
    };

    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
        
    };

    handleSubmit = (e) => {
        if(this.canBeSubmitted()) { 
            e.preventDefault();
            let arr1 = this.state.array1.split(',')
            let arr2 = this.state.array2.split(',')

            arr1 = this.SquashArray(arr1);
            arr2 = this.SquashArray(arr2);

            this.setState({array3: arr1.filter(o => arr2.some((item) => o === item)).sort().length > 0 ? arr1.filter(o => arr2.some((item) => o === item)).sort() : 'none'});
        }

    };

    canBeSubmitted() {
        const errors = validate(this.state.array1, this.state.array2);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    clearForm = (e) => {
        this.setState({array1: '', array2: '', array3: '', touched: { array1: false, array2: false,}});
    }

    SquashArray(x) {
        let result = JSON.parse("[" + x + "]");
        result = result.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });

        return result;
    }

    render() {
        
        return (
            <div id="ceMain">
                <div className="jumbotron bg-light border border-secondary">
                    <h3 className="display-4">Common Elements</h3>
                    <p className="lead">This is a simple demonstration that utilizes React arrays.  The objective is to compare array 1 with array 2 and determine the common elements in both arrays.  This example uses integers.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group form-width">
                        <label htmlFor="array1">Input first array of integers. ex: (1,2,3,4,5)</label>
                        <input type="text" ref={this.array1} id="array1" className={this.shouldMarkError("array1") ? "error form-control" : "form-control"} value={this.state.array1} onChange={this.handleArray1Change} onBlur={this.handleBlur("array1")} pattern="^([0-9]+,?)+$"  required autoFocus={true} />
                        <div className={this.shouldMarkError("array1") ? "showError" : "hideError"}><span>Invalid array input!</span></div>
                    </div>
                    <div className="form-group form-width">
                        <label htmlFor="array2">Input second array of integers. ex: (3,5,6,8,9)</label>
                        <input type="text" id="array2" className={this.shouldMarkError("array2") ? "error form-control" : "form-control"} value={this.state.array2} onChange={this.handleArray2Change} onBlur={this.handleBlur("array2")} pattern="^([0-9]+,?)+$" required />
                        <div className={this.shouldMarkError("array2") ? "showError" : "hideError"}><span>Invalid array input!</span></div>
                    </div>
                    <button type="submit" disabled={this.isDisabled} className="btn btn-primary" >Evaluate</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger "  onClick={this.clearForm}><FontAwesomeIcon icon={faRedo} aria-hidden="true"></FontAwesomeIcon> Clear</button>
                    <hr/>
                    <label htmlFor="txtResults">Common Elements</label>
                    <textarea className="form-control" id="txtResults" rows="4" value={this.state.array3} readOnly></textarea>
                </form>
        </div>
        );
    }
  }
  
  export default CommonElements;