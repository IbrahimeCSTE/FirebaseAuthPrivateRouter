import React from "react";
import { Link } from "react-router-dom";

const NewsSummery = ({ news }) => {
  const { _id, title, author, details, image_url, rating, total_view } = news;
  console.log(title);
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            className="me-2 rounded"
            src={author?.img}
            style={{ height: "60px" }}
          ></img>
          <div>
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        {/* <div>
            <FaRegBookmark className='me-2'></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div> */}
      </div>
      <div className="card-body">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <img className="card-img" src={image_url} />
        <div className="card-text">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          ) : (
            details
          )}
        </div>
      </div>
      <div className="d-flex  card-footer justify-content-between">
        <div>
          {/* <FaStar className='text-warning me-2'></FaStar> */}
          <span>{rating?.number}</span>
        </div>
        {/* <div>
            <FaEye className='me-2'></FaEye>
            <span>{total_view}</span>
        </div> */}
      </div>
    </div>
  );
};

export default NewsSummery;
