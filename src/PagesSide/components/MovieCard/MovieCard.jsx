import dayjs from "dayjs";
import scss from "./MovieCard.module.scss";
import poster from "../../../assets/poster.png";
const img_host = "https://image.tmdb.org/t/p/w220_and_h330_face/";

const MovieCard = ({ el }) => {
  return (
    <div className={scss.MovieCard}>
      <div className={scss.image}>
        {el?.poster_path ? (
          <img src={`${img_host}${el?.poster_path}`} alt={el.title} />
        ) : (
          <img
            style={{
              height: "clamp(210px, 30vw, 330px)",
            }}
            src={poster}
            alt="poster"
          />
        )}
      </div>
      <div className={scss.title}>
        <h4>{el?.title || el?.name}</h4>
        <h5>
          {dayjs(el?.release_date || el?.first_air_date).format("MMM D, YYYY")}
        </h5>
      </div>
    </div>
  );
};

export default MovieCard;
