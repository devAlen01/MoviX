import Hero from "./Hero";
import Popular from "./Popular";
import TopRated from "./TopRated";
import TrendingAll from "./TrendingAll";
import TvPopular from "./TvPopular";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrendingAll />
      <Popular />
      <TvPopular />
      <TopRated />
    </>
  );
};

export default HomePage;
