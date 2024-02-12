import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios'

//Login
export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:5000/api/v2/auth/login",user);
        localStorage.setItem("user",res.data.accessToken);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure());
    }
}

//Register
export const register = async (user) => {
    try{
        const res = await axios.post("http://localhost:5000/api/v2/auth/register",user);
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

//Load User
export const loadUser = async (dispatch) => {
    dispatch(loginStart());
    try{
        const res = await axios.get("http://localhost:5000/api/v2/auth/loadUser",{params:{token:localStorage.getItem("user")}});
        dispatch(loginSuccess(res.data.user));
    }
    catch(err){
        dispatch(loginFailure());
    }
}

//getNotes
export const getNotes = async () => {
    try{
        const res = await axios.get("http://localhost:5000/api/v2/notes/all",{params:{token:localStorage.getItem("user")}});
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

//add Notes
export const addNote = async (note) => {
    try{
        const res = await axios.post("http://localhost:5000/api/v2/notes/add",note,{params:{token:localStorage.getItem("user")}});
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

//updateNotes


//deleteNotes
export const deleteNote = async (id) => {
    try{
        const res = await axios.delete(`http://localhost:5000/api/v2/notes/delete/${id}`,{params:{token:localStorage.getItem("user")}});
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

