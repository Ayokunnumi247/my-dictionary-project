import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./images-dictionary.png";

function App(props) {
  return (
    <div className="App">
      <img
        src={logo}
        alt="img-dictionary"
        rel="noopener noreferrer"
        className="img-fluid"
      />
      <Dictionary defaultKeyword="Hello" />
      {""}
      <footer>
        The project was code by{""}
        <a
          href="https://github.com/Ayokunnumi247"
          target="blank"
          rel="noopener noreferrer"
        >
          Ayokunnumi Andu
        </a>
        {""} and is {""}
        <a
          href="https://github.com/Ayokunnumi247/my-dictionary-project"
          target="blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}

export default App;
