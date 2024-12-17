import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      {""}
      <footer>
        The project was code {""}
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
