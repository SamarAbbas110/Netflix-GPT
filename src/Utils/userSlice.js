import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "user",
    initialState : null,
    reducers : {
        addUser : (state , action) => {
            return action.payload
        },
        removeUser : (state , action) => {
            return null;
        }
    }
})
 

export default counterSlice.reducer
export const { addUser , removeUser} = counterSlice.actions;    