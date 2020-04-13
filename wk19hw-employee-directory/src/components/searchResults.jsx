
import React from "react";

function SearchResults({ persons }, { filteredPersons }) {
  return (
    <div className="container">
      {" "}
      <div className="results-table">
        <table className="table table-striped table-dark table-sortable">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>
                  <img src={person.picture.medium} alt="thumb" />{" "}
                </td>
                <td>{person.name.first}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {}
    </div>
  );
}

export default SearchResults;