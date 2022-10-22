import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagory")
      .then((data) => data.json())
      .then((item) => {
        //console.log(item);
        setCatagory(item);
      });
  }, []);

  return (
    <div>
      {catagory &&
        catagory.map((pd, idx) => (
          <div key={idx}>
            <ul>
              <li>
                <Link to={`/catagory/${pd.id}`}>{pd.name}</Link>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default LeftNav;
