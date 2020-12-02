import React, {Component} from 'react';
import {ladys} from "./database/ladysDB";
import Compladys from "./components/ladys/compladys";

class App extends Component {
  render() {
    return (
        <div>
            {
                ladys.map((lady, index) => {
                    let cls = index%2 ? 'dark' : 'white';
                return (
                    <Compladys
                        item={lady}
                        cls={cls}
                        key={index}/>);
                })
            }

        </div>
    );
  }
}

export default App;
