import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleNews = () => {
  const data = useLoaderData();
  const { title, details, image_url, category_id } = data;
  console.log(data);
  return (
    <div className="card">
      <img className="card-img" src={image_url} />
      <div className="card-body">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-text">{details}</div>
        <Link to={`/catagory/${category_id}`}>
          <button className="btn btn-primary">All news in this category</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleNews;
