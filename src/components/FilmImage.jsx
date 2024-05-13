import React from "react";
import data from "../assets/data.json";

const FilmImage = ({ selectFilmID }) => {
  return (
    <>
      <div className="img-films">
        {data.map((items) => {
          console.log(items);
          if (selectFilmID.id === items.id) {
            return (
              <div className="img-films-g" key={items.id}>
                {items.actors.map((info, index) => {
                  return (
                    <div key={index} className="s">
                      <img src={info.picture} alt=""  />
                      <p>{info.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default FilmImage;
