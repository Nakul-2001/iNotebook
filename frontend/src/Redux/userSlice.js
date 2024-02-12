import {createSlice} from "@reduxjs/toolkit"  

const userRedux = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,
        auth:false,
        numNotes:0,
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.auth = true;
            state.currentUser = action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.auth = false;
            state.error = true;
            state.currentUser = null;
        },
        incrementNotes:(state)=>{
            state.numNotes += 1;
        },
        decrementNotes:(state)=>{
            state.numNotes -= 1;
        }
    },
});

export const {loginStart,loginSuccess,loginFailure,incrementNotes,decrementNotes} = userRedux.actions;
export default userRedux.reducer;