import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    isLogin: false
}

const authSlice = createSlice({
    name: 'userData',
    initialState,
    reducers:{
        saveUsersData: (state, action) => {
            state.userData = action.payload.userData;
            state.isLogin = action.payload.isLogin;
        },
        logoutUser: (state, action) => {
            state.userData = null;
            state.isLogin = false;
        }
    }
});

export const {saveUsersData, logoutUser} = authSlice.actions;
export default authSlice.reducer