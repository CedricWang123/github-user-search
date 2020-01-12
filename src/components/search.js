import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    state = {  }

    handleClick = ()=>{
        this.props.searchName(this.input.value);
        this.input.value = '';
    }

    render() { 
        return ( 
        <div className='search'>
            <img src={require('../assets/github_badge.png')}></img>
            <input ref={input=>this.input=input} placeholder="enter a github username" />
            <button onClick={this.handleClick}>Search</button>
        </div>
        );
    }
}
 
export default Search;