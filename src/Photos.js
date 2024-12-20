import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="container">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img src={photo.src.landscape} alt="word-photos" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
