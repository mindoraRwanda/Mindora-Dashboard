import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:{token?: string }={token:undefined};

 export const CounterReducer=createSlice({
    name:'mindora',
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string|undefined>)=>{
            const {payload}=action;
            state.token=payload;

        },
        setToken:(state,action)=>{
            state.token=undefined;
        },

    },

});

export const {setToken,setToken}=slice.actions;
export default slice.reducer;