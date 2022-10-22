import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummery from "../newsSummary/NewsSummery";

const Catagory = () => {
  const data = useLoaderData();
  return (
    <div>
      {data && data.map((news, idx) => <NewsSummery key={idx} news={news} />)}
    </div>
  );
};

export default Catagory;
