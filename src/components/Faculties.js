import React from "react";
import Base from "./Base";
import { Faculty } from "./FacultyApi";

const Faculties = () => {
  return (
    <Base>
      <div style={{ width: "99vw", margin: "15px auto" }}>
        <div
          style={{
            marginLeft: "35px",
            fontSize: "4rem",
            width: "90vw",
            fontWeight: "500",
            margin: "15px auto",
            textAlign: "left",
          }}
        >
          Faculties
        </div>
        <table
          style={{
            margin: "auto",
            textAlign: "left",
            marginTop: "10px",
            border: "1px solid grey",
            padding: "0 20px",
            width: "90vw",
          }}
        >
          <tbody>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Area of Specialization </th>
              <th>Qualification</th>
            </tr>
            {Faculty.map((row) => (
              <tr key={row._id}>
                <td>{row.name}</td>
                <td>{row.designation}</td>
                <td>{row.specialization}</td>
                <td>{row.Qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Base>
  );
};
export default Faculties;
