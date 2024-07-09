import { useDispatch, useSelector } from "react-redux";
import scss from "./Popular.module.scss";
import { useEffect, useState } from "react";
import { getMovieList } from "../../../redux/features/movieSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/loader/Loader";
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        autoplay: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.1,
        arrows: false,
        autoplay: false,
      },
    },
  ],
};

const Popular = () => {
  const dispatch = useDispatch();
  const { popularMovies, isLoading } = useSelector((state) => state.movieSlice);

  useEffect(() => {
    dispatch(getMovieList("movie/popular"));
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <section id={scss.Popular}>
      <div className="container">
        <div className={scss.content}>
          <h3>Популярно сейчас</h3>
          <Slider {...settings}>
            {popularMovies.map((el, index) => (
              <div key={index} className={scss.top_movie}>
                <MovieCard el={el} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;
