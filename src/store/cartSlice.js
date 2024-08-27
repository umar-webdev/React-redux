import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";

const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            //Redux
            // return [...state,action.payload]
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=> item.id !== action.payload)
        },
    },
})
export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;