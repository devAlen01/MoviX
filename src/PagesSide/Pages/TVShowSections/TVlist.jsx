import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList, pageChange } from "../../../redux/features/movieSlice";
import scss from "./TVlist.module.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import ResponsivePagination from "react-responsive-pagination";
import "./Paginate.scss";
import Loader from "../../components/loader/Loader";
const TVList = () => {
  const dispatch = useDispatch();
  const { movieList, activePage, isLoading } = useSelector(
    (state) => state.movieSlice
  );
  useEffect(() => {
    dispatch(getList({ type: "discover/tv", page: activePage }));
  }, [activePage]);

  const handlePageChange = (page) => {
    dispatch(pageChange(page));
  };

  if (isLoading) return <Loader />;
  return (
    <div className={scss.TVList}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {movieList?.results?.map((el) => (
              <MovieCard el={el} key={el.id} />
            ))}
          </div>
          <div className={scss.pagination}>
            <ResponsivePagination
              current={activePage}
              total={movieList?.total_pages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVList;
