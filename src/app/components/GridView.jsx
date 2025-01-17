import React, { useState } from "react";

const GridView = () => {
  const [rows, setRows] = useState([]); // State to store rows

  // Add a new row
  const handleAddRow = () => {
    setRows([...rows, { name: "", age: "", email: "" }]);
  };

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Save all rows
  const handleSave = () => {
    console.log("Saved Rows:", rows); // Replace with API call or desired action
    alert("Rows saved successfully!");
  };

  return (
    <div>
      <h3>Dynamic Grid View</h3>
      <button onClick={handleAddRow}>Add Row</button>
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.age}
                  onChange={(e) =>
                    handleInputChange(index, "age", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="email"
                  value={row.email}
                  onChange={(e) =>
                    handleInputChange(index, "email", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length > 0 && (
        <button onClick={handleSave} style={{ marginTop: "20px" }}>
          Save All Rows
        </button>
      )}
    </div>
  );
};

export default GridView;
