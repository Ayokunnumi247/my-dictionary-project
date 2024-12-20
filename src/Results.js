import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.error) {
    return (
      <div className="Results">
        <p className="error">{props.error}</p>
      </div>
    );
  } else if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <p>{props.results.phonetic}</p>
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
