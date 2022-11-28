import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                <li key="relativeListItem1">ABC</li>
                <li key="relativeListItem1">XYZ</li>
                <li key="relativeListItem1">PQR</li>
                <li key="relativeListItem1">STU</li>
               </ol>
            </div>
        )
    }
}


export default App;
