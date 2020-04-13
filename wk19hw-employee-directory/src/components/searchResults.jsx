import React from "react";

function Results({ persons }, { filteredPersons }, handleSort) {
  return (
    <div className="container">
      {" "}
      <div className="results-table">
        <table className="table table-striped table-dark table-sortable">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                <div onClick={() => handleSort(persons)}>Name</div>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
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
    </div>
  );
}

export default Results;