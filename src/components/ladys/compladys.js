import React, {Component} from 'react';
import './Ladys.css';

class Compladys extends Component {
    render() {
        let {item, cls} = this.props;
        return (
            <div className={cls}>{item.name} - {item.year} - {item.rozmir} </div>
        );
    }
}

export default Compladys;