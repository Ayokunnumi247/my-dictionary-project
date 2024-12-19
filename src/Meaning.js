import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p className="definitions">{props.meaning.definition}</p>

      <em className="example">{props.meaning.example}</em>

      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
