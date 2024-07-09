import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../PagesSide/components/layout/LayoutSide";
import HomePage from "../PagesSide/Pages/HomeSections/HomePage";
import MoviePage from "../PagesSide/Pages/MoviesSections/MoviePage";
import TVShowPage from "../PagesSide/Pages/TVShowSections/TVShowPage";
import DetailPage from "../PagesSide/Pages/DetailSections/DetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "/tvShow",
        element: <TVShowPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);
