import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name:"darkMode",
    initialState: {
        isDarkMode: getDarkMode()
    },
    reducers:{
        changeMode: (state) =>{
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem('isDarkMode',state.isDarkMode);
        }
    }
});

function getDarkMode(){
    const isDarkMode = localStorage.getItem('isDarkMode');
    console.log(isDarkMode);
    if(isDarkMode === null){
        return false;
    }
    return isDarkMode;
}

export const selectIsDarkMode = (state) => state.darkMode.isDarkMode;
export const {changeMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;