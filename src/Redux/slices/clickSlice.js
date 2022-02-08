import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{  
        showOverlay:true, 
        showMobileNav:false, 

    },
    reducers:{
        ShowMobileNavFN:(state)=>{     

            state.showOverlay=true;   
            state.showMobileNav=true;   
        },
        HideMobileNavFN:(state)=>{     

            state.showOverlay=false;    
            state.showMobileNav=false;   
        },
    }
});



export const {ShowMobileNavFN,HideMobileNavFN} =clickSlice.actions; 

//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

