import React, { Component } from "react";
import Search from "./searchForm";
import SearchResults from "./searchResults";
import axios from "axios";

class Tracker extends Component {
  state = {
    persons: [],
    filteredPersons: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20").then(({ data }) => {
      const persons = data.results;
      this.setState({
        persons: persons,
        filteredPersons: persons
      });
    });
  }

  handleInputChange = event => {
    const searchInput = event.target.value;
    const filteredPersons = this.state.persons.filter(person => {
      let name = person.name.first.toLowerCase();
      console.log(typeof name);
      const matchPersons = name.indexOf(searchInput.toLowerCase()) !== -1;

      return matchPersons;
    });

    this.setState({
      filteredPersons: filteredPersons
    });
  };

  render() {
    return (
      <div className="text-center">
        <Search handleInputChange={this.handleInputChange} />
        <SearchResults persons={this.state.filteredPersons} />
      </div>
    );
  }
}

export default Tracker;