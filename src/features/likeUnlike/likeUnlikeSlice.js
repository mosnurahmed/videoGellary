import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {initialState} from "../video/videoSlice"
import {updateLikeUnlike} from "../likeUnlike/likeUnlikeAPI"
import { getVideo } from "../video/videoAPI";

export const countLikeUnlike = createAsyncThunk("likeUnlike/updateLikeUnlike", async ({reaction, id} ) => {
  // console.log(reaction)
  // console.log(id)
  const likeUnlike = await updateLikeUnlike(reaction, id);
  return likeUnlike;
});

console.log(initialState. video)

const likeUnlikeSlice = createSlice({
  name: "likeUnlike",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(countLikeUnlike.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(countLikeUnlike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video =action.payload
      })
      .addCase(countLikeUnlike.rejected, (state, action) => {
        state.isLoading = false;
        state.video ={}
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default likeUnlikeSlice.reducer;
