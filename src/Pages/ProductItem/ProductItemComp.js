import styled from 'styled-components';
import SliderRow from './1SliderRow/Slider/SliderRow';
import DetailsRow from './2DetailsRow/DetailsRow';



function ProductItemComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductItemComp-wrapper">
                 <div className="slider-row">
                    <SliderRow></SliderRow>
                    <DetailsRow className='w-70'></DetailsRow>
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
