const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  authors: null,
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    searchAuthor: (state, action) => {
      state.authors = action.payload;
    },
    reset: (state, action) => {
      if (action.payload === "remove") {

        state.tags = [];
        state.search = "";
        state.authors = null;
      }
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, reset, searchAuthor } = filterSlice.actions;
