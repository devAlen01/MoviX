import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://api.themoviedb.org/3/";
const key = "acbae6bf5e4a8680dd07ce2aaf7400ad";

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  tvPopular: [],
  allTrending: [],
  isLoading: false,
  error: "",
};

export const getMovieList = createAsyncThunk(
  "movies/getMovies",
  async (type, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${api}${type}`, {
        params: {
          language: "ru-RU",
          api_key: key,
          page: 1,
        },
      });
      return { type, result: data.results };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.type === "movie/popular") {
          state.popularMovies = action.payload.result;
        } else if (action.payload.type === "movie/top_rated") {
          state.topRatedMovies = action.payload.result;
        } else if (action.payload.type === "tv/popular") {
          state.tvPopular = action.payload.result;
        } else if (action.payload.type === "trending/all/day") {
          state.allTrending = action.payload.result;
        }
      })
      .addCase(getMovieList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export default movieSlice.reducer;
