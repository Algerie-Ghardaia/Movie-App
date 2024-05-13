import "./App.css";
import { Routes, Route } from "react-router-dom";
import data from "./assets/data.json";
//---------IMPORT ROUTES---------//
import Home from "./components/Home";
import Films from "./components/Films";
import { useState } from "react";
import creme from "./assets/creme.png";
//-------------------------------//

function App() {
  const [themeImage, setThemeImage] = useState([creme]);

  const [selectFilm, setSelectFilm] = useState("Harry Potter");
  const [selectFilmID, setSelectFilmiD] = useState("");

  const handlSelectFilm = (film) => {
    setThemeImage(film.background);
    setSelectFilm(film.name);
    setSelectFilmiD(film)
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${themeImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              handlSelectFilm={handlSelectFilm}
              setThemeImage={setThemeImage}
            />
          }
        />
        <Route
          path="/films"
          element={
            <Films
              data={data}
              selectFilm={selectFilm}
              handlSelectFilm={handlSelectFilm}
              setThemeImage={setThemeImage}
              selectFilmID={selectFilmID}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
