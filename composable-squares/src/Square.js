import React from 'react';
const Square = (props) =>{
    const {text} = props;
    return React.createElement("h3", null, text);
};
export default Square;