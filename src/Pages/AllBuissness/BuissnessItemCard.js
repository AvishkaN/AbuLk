import styled from 'styled-components';
import LocationIconSvg from '@mui/icons-material/LocationOn';
import CallIconSvg from '@mui/icons-material/Call';
import WorldIconSvg from '@mui/icons-material/Language';

import FavoriteIconSvg from '@mui/icons-material/FavoriteBorder';
import FavIcon from '../../Components/UI/FavIcon/FavIcon';
import StarSection from '../../Components/UI/StarSection/StarSection';


function BuissnessItemCard({
    className="",

    buissnessImage,
    buissnessName,
    description,
    location,
    number,
    website,
    ratingsStarCount,
    reviewsCount,
    IsFavourited=false,
}) {
  return (
    <DIV className={`row ${className} text-color-grey-light  border-radius-5 `}>
        {/* Image */}
        <div className="col-3 image pe-0 ps-0">
            <img src={buissnessImage} className=" border-bottom-left-radius-5 border-top-left-radius-5 " alt="" />    
        </div>

        {/* Detaiails */}
        <div className="col-9 display-flex  flex-direction-column  ps-1 pb-3 ">
                <div className="text-color-black fw-bold  font-1-6   ps-3">{buissnessName}</div>    
                <div className="ps-3 display-flex ">
                    {/* Description text  */}
                            {description}
                    

                    {/* Favourite Icon */}
                        <FavIcon className='font-3-5' filled={IsFavourited} ></FavIcon>
                </div>    
                
                {/* Details with icons */}
                <div className="mt-4 ps-3">
                            <div className=""><LocationIconSvg className='pe-2 font-2-3'  ></LocationIconSvg>{location}</div>    
                            <div className=""><CallIconSvg className='pe-2 font-2-3'  ></CallIconSvg>{number}</div>    
                            <div className=""><WorldIconSvg className='pe-2 font-2-3'  ></WorldIconSvg>{website}</div>    
                </div>

                    {/* Card bottom */}
                <div className="card-bottom display-flex  justify-content-between background-yello mt-auto border-grey-light-top pt-3  ps-3">
                        
                        <div className="display-flex ">
                            <StarSection fillStars={ratingsStarCount} className="me-2"></StarSection>
                            {`${reviewsCount}   `} 
                            <div className="ms-2">
                                  Reviews
                            </div>
                        </div>   

                        <div className="text-color-red cursor-p   ">CLICK NOW</div>    
                
                </div>
        </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .image{
        height: 39vh;
        img{
            width:100%;
            height:100%;
        }
    }


    .box-shadow-red{
        box-shadow:-2px 2px 6px 0px rgba(255, 11, 11, 0.33);
        transition:all .2s;
        
        &:hover{
            
            box-shadow:-2px 2px 12px 3px rgba(255, 11, 11, 0.33);
        }
    }
    
   
`;

export default BuissnessItemCard;
