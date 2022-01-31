import styled from 'styled-components';



function ToggleContainer({className="",activeNow="sale"}) {    
  return (
    <DIV className={`${className}`}>
         <div className="ToggleContainer-wrapper display-flex text-white text-center pt-1 pe-1 ps-1 pb-1">
                <div className={`toggle-btn-2 w-50 pt-1 pb-1 flex-all-center cursor-p font-1-5 ${activeNow==="sale" && 'current-active-toggle'}`}>Sale</div> 
                <div className={`toggle-btn-2 w-50 pt-1 pb-1 flex-all-center cursor-p font-1-5 ${activeNow==="rent" && 'current-active-toggle'}`}>Rent</div>  
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ToggleContainer */
    border-radius: 30px; 
    
    .ToggleContainer-wrapper{
      /* width: var(--ToggleContainer-content-width);
        margin-left: auto;
        margin-right: auto;  */
        background: var(--color-black);


        .toggle-btn-1{
    
        }
        
        .toggle-btn-2{
            
        }
        .current-active-toggle{
            background: var(--color-white); 
            color: red;  
            border-radius: 30px; 
            
        }

    }
`;

export default ToggleContainer;
