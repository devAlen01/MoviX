import dayjs from "dayjs";
import scss from "./MovieCard.module.scss";

const MovieCard = ({ el }) => {
  return (
    <div className={scss.MovieCard}>
      <div className={scss.image}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el?.poster_path}`}
          alt={el.title}
        />
      </div>
      <div className={scss.title}>
        <h4>{el?.title}</h4>
        <h5>{dayjs(el?.release_date).format("MMM D, YYYY")}</h5>
      </div>
    </div>
  );
};

export default MovieCard;
