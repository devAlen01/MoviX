import { useDispatch, useSelector } from "react-redux";
import scss from "./TrendingAll.module.scss";
import { useEffect } from "react";
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
  autoplaySpeed: 3000,
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
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 2,

        arrows: false,
        autoplay: false,
      },
    },
  ],
};

const TrendingAll = () => {
  const dispatch = useDispatch();
  const { allTrending, isLoading } = useSelector((state) => state.movieSlice);

  useEffect(() => {
    dispatch(getMovieList("trending/all/day"));
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <section id={scss.TrendingAll}>
      <div className="container">
        <div className={scss.content}>
          <h3>В тренде</h3>
          <Slider {...settings}>
            {allTrending.map((el, index) => (
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

export default TrendingAll;
