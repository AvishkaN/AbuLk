import styled from 'styled-components';
import LocationIconSvg from '@mui/icons-material/LocationOn';
import CallIconSvg from '@mui/icons-material/Call';
import WorldIconSvg from '@mui/icons-material/Language';

import FavoriteIconSvg from '@mui/icons-material/FavoriteBorder';


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
}) {
  return (
    <DIV className={`row ${className} text-color-grey-light  border-radius-5 `}>
        {/* Image */}
        <div className="col-3 image pe-0 ">
            <img src={buissnessImage} className=" border-bottom-left-radius-5 border-top-left-radius-5 " alt="" />    
        </div>

        {/* Detaiails */}
        <div className="col-9 display-flex  flex-direction-column  ps-1 pb-3 ">
                <div className="text-color-black fw-bold  font-1-6   ps-3">{buissnessName}</div>    
                <div className="ps-3 display-flex ">
                    {/* Description text  */}
                            {description}
                    

                    {/* Favourite Icon */}
                            <FavoriteIconSvg className='p-2 font-3-5 text-color-red   box-shadow-red border-radius-circle cursor-p  '></FavoriteIconSvg>    
                  
                </div>    
                
                {/* Details with icons */}
                <div className="mt-4 ps-3">
                            <div className=""><LocationIconSvg></LocationIconSvg>{location}</div>    
                            <div className=""><CallIconSvg></CallIconSvg>{number}</div>    
                            <div className=""><WorldIconSvg></WorldIconSvg>{website}</div>    
                </div>

                    {/* Card bottom */}
                <div className="card-bottom display-flex  justify-content-between background-yello mt-auto border-grey-light-top pt-3  ps-3">
                        <div className="">{reviewsCount} Reviews</div>    
                        <div className="text-color-red cursor-p   ">CLICK NOW</div>    
                
                </div>
        </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .image{
        height: 42vh;
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
