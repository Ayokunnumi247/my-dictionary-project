import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>

      <strong>Example: </strong>
      <em>{props.meaning.example}</em>

      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
