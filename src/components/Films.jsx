import React, { useContext, useEffect, useState } from "react";

import { BsDoorClosedFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import FilmButton from "./FilmButton";
import "../App.css";
import FilmImage from "./FilmImage";
import creme from "../assets/creme.png"

const Films = ({ data, selectFilm,handlSelectFilm,setThemeImage,selectFilmID }) => {
  //   const [data, setData] = useState({});

  const navigate = useNavigate();

  return (
    <>
      <div className="icon">
        <BsDoorClosedFill
          size={30}
          color="red"
          onClick={() => {
            navigate("/");
            setThemeImage(creme)
          }}
        />
      </div>
      <div className="glob">
        <FilmButton
          data={data}
          selectFilm={selectFilm}
          handlSelectFilm={handlSelectFilm}
        />
        <FilmImage selectFilmID={selectFilmID}/>
      </div>
    </>
  );
};

export default Films;
