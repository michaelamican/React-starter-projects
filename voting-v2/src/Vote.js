import React from 'react';
import './App.css';


class Vote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick=()=>{
        this.setState({count: this.state.count + 1});
    }

    render(){
            const{name} = this.props;
        return(
            <div class="container">
                <div class="count">{this.state.count}</div>
                <div class="language">{name}</div>
                <button class="vote" onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

export default Vote;