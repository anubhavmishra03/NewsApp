import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ backgroundColor: "#032c4d" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              imageURL
                ? imageURL
                : "https://media.istockphoto.com/photos/news-button-picture-id598565916?k=6&m=598565916&s=612x612&w=0&h=OUSPGB0ZxA1AUzbG8kG0XboE-lb_HPYAyDQnuaP8Nzs="
            }
            className="card-img-top"
            alt={title}
            style={{ color: "white" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              {title}...
            </h5>
            <p className="card-text" style={{ color: "white" }}>
              {description}...
            </p>
            <p className="card-text">
              <small style={{ color: "#918282" }}>
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-sm btn-outline-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
