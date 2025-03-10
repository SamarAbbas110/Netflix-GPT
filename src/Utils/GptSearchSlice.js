import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name : "GPT",
    initialState : {
       useGPTsearch : false, 
    },
    reducers : {
        addGPTSearch : (state) => {
            state.useGPTsearch = !state.useGPTsearch
        }
    }
})

export default GptSearchSlice.reducer
export const { addGPTSearch} = GptSearchSlice.actions

