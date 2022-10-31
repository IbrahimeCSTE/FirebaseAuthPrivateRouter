import React, { useState } from "react";
import DirectionMap from "../../component/Map/DirectionMap";
import Map from "../../component/Map/Map";

const Home = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const handleDirection = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* <Map /> */}
      <form onSubmit={handleDirection}>
        <input
          type="text"
          onChange={(e) => setOrigin(e.target.value)}
          required
          placeholder="origin"
        />{" "}
        <br />
        <input
          type="text"
          onChange={(e) => setDestination(e.target.value)}
          required
          placeholder="destination"
        />{" "}
        <br />
        <input type="button" value="Location" />
      </form>

      <DirectionMap origin={origin} destination={destination} />
    </div>
  );
};

export default Home;
