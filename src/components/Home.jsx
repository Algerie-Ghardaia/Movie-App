// import { useNavigate } from "react-router-dom";
// import "../App.css";

// const Home = ({ data }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="glob">
//       <div className="title">
//         <div
//           className="title-film"
//           onClick={() => {
//             navigate("/films");
//           }}
//         >
//           <h1>Harry Potter</h1>
//         </div>
//         <div
//           className="title-film"
//           onClick={() => {
//             navigate("/films");
//           }}
//         >
//           <h1>Lord of the rigns</h1>
//         </div>
//         <div
//           className="title-film"
//           onClick={() => {
//             navigate("/films");
//           }}
//         >
//           <h1>Start Wars</h1>
//         </div>
//       </div>
//       <div className="big-title">
//         <div
//           className="big-title-title"
//           onClick={() => {
//             navigate("/films");
//           }}
//         >
//           Merci de choisir un film
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useNavigate } from "react-router-dom";
import "../App.css";
import FilmButton from "./FilmButton";

const Home = ({ data, selectFilm, handlSelectFilm,setThemeImage }) => {
  const navigate = useNavigate();

  return (
    <div className="glob">
      <FilmButton
        data={data}
        selectFilm={selectFilm}
        handlSelectFilm={handlSelectFilm}
        setThemeImage={setThemeImage}
      />
      <div className="big-title"  onClick={() => {
            navigate("/films");
          }}>
        <div
          className="big-title-title"
          onClick={() => {
            navigate("/films");
          
          }}
        >
          Merci de choisir un film
        </div>
      </div>
    </div>
  );
};

export default Home;
