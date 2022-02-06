import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { HideMobileNavFN, selectClicks } from '../../Redux/slices/clickSlice';
import MobileNav from './MobileNav/MobileNav';



function Overlay({className=""}) {

  const dispatch=useDispatch();
  const clicks=useSelector(selectClicks);



  const handleClick=(e)=>{
    console.log(clicks);
    
    const IsSelectOverlay=(e.target.classList[0]=='Overlay-wrapper');
    
    console.log(IsSelectOverlay);

    if(IsSelectOverlay){ // hide mobile nav and overlay
        dispatch(HideMobileNavFN());
    }

  };


  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="Overlay-wrapper cursor-p">
             {clicks.showMobileNav &&  <MobileNav  className=' w-30  mobile-navv p-3'></MobileNav>}
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    height: 100%;  
    background: #00000091;  
    position: absolute;
    top: 0;
    left: 0; 
    z-index:1000; 
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Overlay */
    
    .Overlay-wrapper{
      /* width: var(--Overlay-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .mobile-navv{
          margin-left: auto;  

          @media(max-width:499px){     
                      width: 50% !important;
        }


          .nav-right-button{
            width:100% !important; 

            &:first-child{
              /* background: red;  */
            }
          }
        }

     

    }
`;

export default Overlay;
