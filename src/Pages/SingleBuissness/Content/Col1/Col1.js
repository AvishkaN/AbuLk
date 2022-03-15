import styled from 'styled-components';
import BuissnessDescriprion from './1BuissnesDescription/BuissnessDescriprion';
import ProductSlider from '../../../../Components/ProductSlider/ProductSlider';
import Overview from './2Overview/Overview';



function Col1({className="",SingleBuissnessData}) {
  
  return (
    <DIV className={`${className} `}>


             {/* Buissness Name */}
                    <div className="font-2-3 fw-bold mb-2 mt-1">{SingleBuissnessData.BuissnessName}</div>

             {/* Buissness Details */}
                    <BuissnessDescriprion {...SingleBuissnessData.imgSliderSection.buissnessDescriptionTop} className="mb-2"></BuissnessDescriprion>



             {/* slider */}
             <div className="background-yello position-relative">
                       <ProductSlider className='' images={SingleBuissnessData.imgSliderSection.images}></ProductSlider>

                        {/* Price */}
                        <div className="price  text-color-white font-3 pe-4 w-15 ps-3">{SingleBuissnessData.imgSliderSection.price}</div>

             </div>

            {/* Overview */}
                <Overview className=''></Overview>
            {/* relatated buissness */}
            {/* ratings and reviews */}
            {/* comments */}
            {/* add review */}
    </DIV>
  );
}


const DIV=styled.div`
    
    .price{
        background-color:#00148e;
        clip-path: polygon(70% 0, 99% 50%, 70% 100%, 0 100%, 0 0);

        position: absolute;
        top: 0;
        left: 0;
        }
   
`;

export default Col1;
