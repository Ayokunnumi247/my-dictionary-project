import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(false);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      setError("There was an error retrieving the word");
    } else {
      setResults(response.data);
      setError(null);
    }
  }

  function handleImgUrl(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "8e4efa33a280aof6c33fe6a0t3ab54ec";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let imgApi = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imgApi).then(handleImgUrl);
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

        <Results results={results} error={error} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
