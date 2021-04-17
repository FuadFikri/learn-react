import React, {Component} from 'react';
import Component3 from './Component3';


class Component1 extends Component {



    render() {
        return (
            <div>
                <h1>Ini statefull component</h1>

                <Component3/>
            </div>
        )
    }
}

export default Component1;
