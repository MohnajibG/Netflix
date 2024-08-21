import movies from "./assets/movies.json";
import "./App.css";
import logo from "./assets/logo.png";

import Selection from "./compontent/Selection";

const App = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo" />
      </header>
      <div>
        {movies.map((elem) => (
          <Selection key={elem} category={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
