import styled from 'styled-components';
import MobileNav from './MobileNav/MobileNav';



function Overlay({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Overlay-wrapper">
               <MobileNav  className=' w-30  mobile-navv p-3'></MobileNav>
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
        }

     

    }
`;

export default Overlay;
