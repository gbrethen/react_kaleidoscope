import React from 'react';
import './CheckerBoard.css';

class CheckerBoard extends React.Component {
    generateBoard() {
        let iRow = 8;
        let iCol = 8;
        let sHTML = "<table id='tblCB' style='margin: 0 auto; width: 400px; height: 400px; border-collapse: collapse; box-shadow: 8px 8px 4px #898989;'>";

        //generate rows
        for(var i = 0; i < iRow; i++) {
            sHTML += "<tr>";

            //generate columns
            for(var x = 0; x < iCol; x ++) {
                if((i%2 == 0 && x%2 != 0) || (i%2 != 0 && x%2 == 0)) {
                    sHTML += "<td style='margin: 0 auto; border: 1px solid #000; background-color: #343a40;'>&nbsp;</td>";
                }else{
                    sHTML += "<td style='margin: 0 auto; border: 1px solid #000;'>&nbsp;</td>";
                }
            }

            sHTML += "</tr>";
        }

        sHTML += "</table>";

        return sHTML;
    }

    render() {
        return (
            <div id="cbMain">
                <div className="jumbotron bg-light border border-secondary">
                    <h3 className="display-4">Checkerboard</h3>
                    <p className="lead">This is a simple demonstration that utilizes loops, CSS3 perspective, and an html table to generate a Checkerboard.</p>
                </div>
                <div id="Checkerboard" className="parent perspective">
                    <div className="child" dangerouslySetInnerHTML={{ __html: this.generateBoard() }}></div>
                </div>
            </div>
        );
    }
}

export default CheckerBoard;