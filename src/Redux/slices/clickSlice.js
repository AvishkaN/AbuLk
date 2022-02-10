import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{  
        showOverlay:true, 
        showMobileNav:false, 

        showLocationPopUp:false, 
        showCategoryPopUp:false, 

        showPostAd:true, 

        classifiedPageSelectedLocation:"Location",
        classifiedPageSelectedCategory:"Category",

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


        ShowLocationPopupFN:(state)=>{     
            state.showOverlay=true;    
            state.showLocationPopUp=true;    
        },
        ShowCategoryPopupFN:(state)=>{     
            state.showOverlay=true;    
            state.showCategoryPopUp=true;    
        },





        SetClassifedLocationFN:(state,action)=>{     

            state.classifiedPageSelectedLocation=action.payload;    
        },
        SetClassifedCategoryFN:(state,action)=>{     

            state.classifiedPageSelectedCategory=action.payload;    
        },
        ShowHideAllFN:(state)=>{     

            // state.showOverlay=!state.showOverlay; 
            // state.showMobileNav=!state.showMobileNav; 
    
            // state.showLocationPopUp=!state.showLocationPopUp; 
            // state.showCategoryPopUp=!state.showCategoryPopUp; 
    
            // state.classifiedPageSelectedLocation=! state.classifiedPageSelectedLocation;
            // state.classifiedPageSelectedCategory=!state.classifiedPageSelectedCategory;



            state.showOverlay=false;  
            state.showMobileNav=false; 
    
            state.showLocationPopUp=false; 
            state.showCategoryPopUp=false; 
    
            // state.classifiedPageSelectedLocation=null;
            // state.classifiedPageSelectedCategory=null;

        },


     

    }
});



export const {
                            ShowMobileNavFN,
                            HideMobileNavFN,

                            SetClassifedLocationFN,
                            SetClassifedCategoryFN,

                            ShowCategoryPopupFN,
                            ShowLocationPopupFN,


                            ShowHideAllFN,


                                                                        } =clickSlice.actions; 

//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

