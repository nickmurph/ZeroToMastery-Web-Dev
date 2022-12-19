import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello World</h1>
                {/* <p>Welcome to React</p> */}
                <p>{this.props.greeting}</p>
            </div>
        );

    }
}

// the below code block demonstrates how the above is simply a JS function, by other means

// const Hello = (props) => {
//     return (
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>{props.greeting}</p>
//         </div>
//     );
// }

export default Hello;