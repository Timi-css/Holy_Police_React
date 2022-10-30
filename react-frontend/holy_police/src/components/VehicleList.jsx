import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./VehicleList.css";

const VehicleList = () => {
  const [name, setName] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    names();
  }, []);

  const names = async () => {
    const response = await fetch("http://localhost:5000/api/users/vehiclelist");
    setName(await response.json());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <table
        style={{
          borderBottom: "1px solid #999",
          width: "95%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <tbody>
          <tr style={{ borderBottom: "4px solid black" }}>
            <th style={{ borderBottom: "4px solid black" }}>Name</th>
            <th style={{ borderBottom: "4px solid black" }}>Plate Number</th>

            <th style={{ borderBottom: "4px solid black" }}>Contact</th>
          </tr>
          {name
            .filter((data) => data.NumberPlate.includes(query))
            .map((data) => {
              return (
                <tr
                  style={{
                    borderBottom: "0.5px solid #000",
                  }}
                >
                  <td className="table-row">{data.FullName}</td>

                  <td className="table-row">{data.NumberPlate}</td>

                  <td className="table-row">
                    <a
                      href={`sms: ${data.Phone}`}
                      style={{
                        color: " #a02064",
                        textDecoration: "none",
                      }}
                    >
                      {data.Phone}
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
