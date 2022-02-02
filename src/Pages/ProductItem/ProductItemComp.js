import styled from 'styled-components';
import SliderRow from './Row1/Slider/SliderRow';



function ProductItemComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductItemComp-wrapper">
                 <div className="slider-row">
                    <SliderRow></SliderRow>
                 </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .ProductItemComp-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default ProductItemComp;
