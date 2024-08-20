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
        {movies.map((elem, index) => (
          <Selection key={index} category={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
