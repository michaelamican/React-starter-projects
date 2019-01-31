import React from 'react'; // import the React library
import ReactDOM from 'react-dom' // import the REACTDOM library - note DOM is capitalized
import App from "./App";
//We can create a simple element to display on our html page
//const App = React.createElement("h1", null, "Hello World");

// with JSX we can perform the same React.createElement() call with the following:

// and load our App into the DOM, targeting the div located in the /public/index.html
ReactDOM.render(<App />, document.getElementById("root"));


//You can further compartmentalize things by putting App.js, App.css, and Title.js into a "components" folder, with index.js being the top file under src.
// import React from 'react';
// import ReactDOM from 'react-dom';
 
// import App from './components/App';
// ReactDOM.render(<App />, document.getElementById('root'));