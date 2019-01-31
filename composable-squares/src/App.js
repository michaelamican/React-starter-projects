import React from "react";
import ReactDOM from 'react-dom';
import Square from './Square'; //we can drop the .js file extension
import './App.css';
const App = (props) =>{
    return React.createElement('div', null,
            React.createElement('div', {style:{fontSize:"16px", textAlign: "center", height:"250px", width:"250px", fontSize:"30px", display: "inline-block", color: "white", background:"dodgerblue"}},
                React.createElement(Square, {text: "White on Blue"})
            ),
            React.createElement('div', {style:{fontSize:"16px", height:"250px", textAlign: "center", width:"250px", fontSize:"30px", display: "inline-block", color:"dodgerblue", background:"indianred"}},
                React.createElement(Square, {text: "Blue on Red"})
            ),
            React.createElement('div', {style:{fontSize:"16px", height:"250px", textAlign: "center", width:"250px", fontSize:"30px", display: "inline-block", color:"darkolivegreen", background:"lightcoral"}},
                React.createElement(Square, {text: "Green on Pink"})
            )
    )

}

export default App;


// One way to do it with static content. Everything below is meant to go between the imports and the export:
// const App = (props) => {
//     return(
//         <div>
//             <h1>Here's our fancy App.</h1>
//             <p>Hey pretty cool!</p>
//             <Title />
//             <Title />
//             <Title/>
//         </div>
//     );
// };

// Another way: const App = <h1>This is my app</h1>

// Another way: const App = (props) =>
//      return React.createElement('h1', null, "This is my app");
//  }
//
// Another way:
// const Title = (props) => {
//     const { text } = props; // A little bit of destructuring
//     return React.createElement('h1', null, text);
// }
// const App = (props) => {
//     return React.createElement(Title, { text: 'Dynamic content! Hooray!' } );
// }

// Another way:
// const Title = (props) => {
//     const { text } = props;
//     return React.createElement('h1', null, text);
// }
// const App = (props) => {
//     return React.createElement('div', null,
//         React.createElement(Title, { text: 'Title One' } ),
//         React.createElement(Title, { text: 'Title Two' } ),
//         React.createElement(Title, { text: 'Title Three' } )
//     )
// }

// ==========

// Styling:

// <p style="font-weight:bold;color:red;">Hello World</p>
// can instead be written as:
// React.createElement("p", { style:{ fontWeight:"bold", color: "red" }, "Hello World");

// const Title = (props) => {
//     const fWeight = (props.isImportant) ? "bold" : "normal";
     
//     return <h1 style={{color:props.color, fontWeight:fWeight}}>{props.text}</h1>;
// }


// note the double curly braces here: 
// the style property needs to be a complete javascript object,
// and since we are embedding this value, it is also being wrapped in a set of
// curly braces for JSX

 
// const App = (props) => {
//     return (
//         <div>
//             <Title text="Title One" color="red" isImportant={true} />
//             <Title text="Title One" color="green" isImportant={false} />
//             <Title text="Title One" color="orange" isImportant={false} />
//         </div>
//     )
// }