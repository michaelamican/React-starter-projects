import React from 'react';

const App = (tasks) => {
    const { task0, task1, task2, task3 } = tasks
return(
    <div>
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <ul>
            <li>{ task0 }</li>
            <li>{ task1 }</li>
            <li>{ task2 }</li>
            <li>{ task3 }</li>
        </ul>
     </div>
    );
};
export default App;