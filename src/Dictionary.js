import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }
  function search() {
    let apiKey = "8e4efa33a280aof6c33fe6a0t3ab54ec";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word do you what to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              required
              onChange={handleKeyword}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: office, yoga, sunset, zone...
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
