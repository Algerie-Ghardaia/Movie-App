import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const FilmButton = ({ data, selectFilm, handlSelectFilm }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="title">
        {data.map((film) => {
          return (
            <div
              key={film.id}
              onClick={() => {
                navigate("/films");
                handlSelectFilm(film);
           
              }}
            >
              <div className="title-film ">
                <h1>{film.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className={selectFilm ? "big-film-title1" : ""}>{selectFilm}</div>
    </>
  );
};

export default FilmButton;
