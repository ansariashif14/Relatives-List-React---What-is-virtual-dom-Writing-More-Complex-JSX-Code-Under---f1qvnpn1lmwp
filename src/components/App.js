import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const arr=["item1", "item2", "item3"];
        const list=arr.map((value)=>{
            return <li key={`relativeList${value}`}>{value}</li>
        })

        return(
            <div id="main">
              <ol key="relativeList">
                {list}
              </ol>
            </div>
        )
    }
}


export default App;


