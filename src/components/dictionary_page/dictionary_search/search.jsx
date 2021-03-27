import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.search };
  }
  
  render() {
    return (
      <SearchBar
        value={console.log(this.state.value)}
        onChange={(newValue) => this.setState({ value: newValue })}        
      />      
    );
  }
}

export default Search;