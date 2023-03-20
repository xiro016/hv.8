import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookListSlice } from "../reducers/bookListReducers";

// const {
//   actions: { booksFetchSuccess, booksFetching, booksFetchingError },
// } = bookListSlice;

// export const fetchBooks = (service) => async (dispatch) => {
//   try {
//     dispatch(booksFetching());
//     const books = await service.getBooks();
//     dispatch(booksFetchSuccess(books));
//   } catch (err) {
//     dispatch(booksFetchingError(err));
//   }
// };

export const fetchBooks = createAsyncThunk(
  "bookList/fetchAll",
  async (service, thunkApi) => {
    try {
      const books = await service.getBooks();
      return books;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

