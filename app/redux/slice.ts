import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'slice',
    initialState:{
        data:[],
        status:'idle',

    },
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload;

        },
        setStatus:(state,action)=>{
            state.status=action.payload;
        },

    },

});

export const {setData,setStatus}=slice.actions;
export default slice.reducer;