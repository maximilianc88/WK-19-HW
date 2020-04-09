import PropTypes from 'prop-types';
import React from 'react';

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee search"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  children: PropTypes.node,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
}

export default SearchForm;
