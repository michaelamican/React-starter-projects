import React from 'react';
import Vote from './Vote';
import "./App.css";

const App = (props) => {
    return (
        <div class="wrapper">
            <h1>Vote for your favorite language!</h1>
            <div class="tab">
                <Vote name="React" clickMe={() => this.handleClick()}/>
                <Vote name="Angular" clickMe={() => this.handleClick()}/>
                <Vote name="Ember" clickMe={() => this.handleClick()}/>
                <Vote name="Vue" clickMe={() => this.handleClick()}/>
                <Vote name="NodeJS" clickMe={() => this.handleClick()}/>
                <Vote name="Express" clickMe={() => this.handleClick()}/>
                <Vote name="Django" clickMe={() => this.handleClick()}/>
                <Vote name=".NET" clickMe={() => this.handleClick()}/>
                <Vote name="Spring" clickMe={() => this.handleClick()}/>
                <Vote name="Thymeleaf" clickMe={() => this.handleClick()}/>
                <a href="/"><button id="clear">Clear</button></a> 
            </div>
           
        </div>
        
    )
}


export default App;