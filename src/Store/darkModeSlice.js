import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name:"darkMode",
    initialState: {
        isDarkMode: loadFromLocalStorage()
    },
    reducers:{
        changeMode: (state) =>{
            state.isDarkMode = !state.isDarkMode;
            saveToLocalStorage(state.isDarkMode);
        }
    }
});

function loadFromLocalStorage(){
    try {
        const isDarkMode = localStorage.getItem('isDarkMode');
        if(isDarkMode === null){
            return false;
        }
        return isDarkMode === 'true'; 
    }
    catch(e){
        console.warn(e);
        return false;
    }
    
}

function saveToLocalStorage(data){
    try {
        localStorage.setItem('isDarkMode',data);
    }
    catch(e){
        console.warn(e);
    }
}

export const selectIsDarkMode = (state) => state.darkMode.isDarkMode;
export const {changeMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;