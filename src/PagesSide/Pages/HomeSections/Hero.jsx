import { useDispatch, useSelector } from "react-redux";
import scss from "./Hero.module.scss";
import { useEffect } from "react";
import Loader from "../../components/loader/Loader";
import { getMovieList } from "../../../redux/features/movieSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const { popularMovies, isLoading } = useSelector((state) => state.movieSlice);

  useEffect(() => {
    dispatch(getMovieList("movie/popular"));
  }, [dispatch]);

  const randomMovie =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];

  if (isLoading) return <Loader />;

  return (
    <section id={scss.Hero}>
      <div className={scss.content}>
        <div className={scss.random}>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${randomMovie?.backdrop_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "clamp(20vh, 50vw, 80vh)",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              borderRadius: "25px",
              borderImage: "fill 0 linear-gradient(#0003,#000)",
            }}
          >
            <div className={scss.info}>
              <h1 className={scss.wellcome}>{randomMovie?.title}</h1>
              <p className={scss.text}>{randomMovie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
