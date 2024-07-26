import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://api.themoviedb.org/3/";
const key = "acbae6bf5e4a8680dd07ce2aaf7400ad";

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  tvPopular: [],
  allTrending: [],
  movieList: [],
  activePage: 1,
  isLoading: false,
  error: "",
};

export const getMovieList = createAsyncThunk(
  "movies/getMovieList",
  async (type, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${api}${type}`, {
        params: {
          language: "ru-RU",
          api_key: key,
          page: 1,
        },
      });
      return { type, result: data };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getList = createAsyncThunk(
  "movies/getList",
  async ({ type, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${api}${type}`, {
        params: {
          language: "ru-RU",
          api_key: key,
          page: page,
        },
      });
      return { type, result: data };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    pageChange(state, action) {
      state.activePage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.isLoading = false;
        const { type, result } = action.payload;
        if (type === "movie/popular") {
          state.popularMovies = result.results;
        } else if (type === "movie/top_rated") {
          state.topRatedMovies = result.results;
        } else if (type === "tv/popular") {
          state.tvPopular = result.results;
        } else if (type === "trending/all/day") {
          state.allTrending = result.results;
        }
      })

      .addCase(getList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movieList = action.payload.result;
      });
  },
});

export const { pageChange } = movieSlice.actions;
export default movieSlice.reducer;
