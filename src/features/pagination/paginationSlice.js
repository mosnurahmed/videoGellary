import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  pages:[],
  page:1,
 
}


const paginationSlice=createSlice({
  name:"pagination",
  initialState,
  reducers:{
    setLimit:(state, action) =>{
     state.page =action.payload
     state.pages.push(action.payload)
    }

  }
})
export default paginationSlice.reducer;
export const{setLimit} =paginationSlice.actions;

