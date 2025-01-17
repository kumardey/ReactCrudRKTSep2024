import React from "react";
import { Link } from "react-router-dom";

const ListUrl = () => {
  const links = [
    "https://www.w3schools.com/",
    "https://www.google.com",
    "https://www.wikipedia.org",
  ];

  return (
    <div>
      <h1>List of Links</h1>
      <ul>
        {links.map((url, index) => (
          <li key={index}>
            <Link to={`/iframe?url=${encodeURIComponent(url)}`}>{url}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUrl;