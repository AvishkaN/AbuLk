import styled from 'styled-components';
import BuissnessDescriprion from './1BuissnesDescription/BuissnessDescriprion';
import RealedPost from './3RealedtPosts/RealedPost';
import ProductSlider from '../../../../Components/ProductSlider/ProductSlider';
import Overview from './2Overview/Overview';
import Rating from './4Ratings/Rating';
import Comments from './5Comments/Comments';



function Col1({className="",SingleBuissnessData}) {
  
  return (
    <DIV className={`${className} `}>

                <div className="box-shadow-normal ms-4 mt-2  mb-4 border-radius-20 p-4">
                    
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
                </div>


                        {/* Overview */}
                <div className="box-shadow-normal ms-4 border-radius-20 p-4 mb-4">

                        <Overview 
                                text={SingleBuissnessData.imgSliderSection.overView} 
                                contactSection={SingleBuissnessData.imgSliderSection.contactSection} 
                                moreBuissnessInfo={SingleBuissnessData.imgSliderSection.moreBuissnessInfo} 
                                buissnessId={SingleBuissnessData.imgSliderSection.buissnessId} 
                                postedDate={SingleBuissnessData.imgSliderSection.postedDate} 
                                
                                className=''></Overview>

                </div>


            {/*3  relatated buissness */}
            <div className="mt-4">
                    <RealedPost relatedPosts={SingleBuissnessData.imgSliderSection.RelatedPost} className=''></RealedPost>
            </div>

            {/* ratings and reviews   | comments*/}
                <div className="box-shadow-normal ms-4 border-radius-20 p-4 mb-4">
                             <Rating className=''  RatingsAndReviews={SingleBuissnessData.imgSliderSection.RatingsAndReviews}></Rating>


                              {/* comments */}
                              <div className="mt-5">
                                        <div className="font-1-7 fw-bold  ps-3  border-grey-light-bottom pb-3 mb-5">{SingleBuissnessData.imgSliderSection.Comments.length} reviews</div>
                                        <Comments className="mt-4"   comments={SingleBuissnessData.imgSliderSection.Comments} ></Comments>
                              </div>


                </div>

            
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
