import styled from 'styled-components';
import LocationIconSvg from '@mui/icons-material/LocationOn';
import CallIconSvg from '@mui/icons-material/Call';
import WorldIconSvg from '@mui/icons-material/Language';

import FavoriteIconSvg from '@mui/icons-material/FavoriteBorder';
import FavIcon from '../../Components/UI/FavIcon/FavIcon';
import StarSection from '../../Components/UI/StarSection/StarSection';
import Button from '../../Components/UI/Button/Button';


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
    <DIV className={`row ${className} text-color-grey-light  border-radius-5  ps-0 pe-0`}>
        {/* Image */}
        <div className="col-3 image pe-0 ps-0">
            <img src={buissnessImage} className=" border-bottom-left-radius-5 border-top-left-radius-5 " alt="" />    
        </div>

        {/* Detaiails */}
        <div className="col details display-flex  flex-direction-column  ps-1 pb-3 background-re">
                    
                    {/*Buissness Name  */}
                <div className="text-color-black fw-bold  font-1-6   ps-3 mt-md-0 mt-1">{buissnessName}</div>    
               
                    {/* Buissness Description with fav icon */}
                <div className="ps-3 display-flex description">
                    {/* Description text  */}
                            {description}
                    

                    {/* Favourite Icon */}
                        <FavIcon id="fav-icon" className='font-3-5 ms-auto fav-icon' filled={IsFavourited} ></FavIcon>
                </div>    
                
                {/* Details with icons */}
                <div className="mt-4 ps-3">
                            <div className=""><LocationIconSvg className='pe-2 font-2-3'  ></LocationIconSvg>{location}</div>    
                            <div className=""><CallIconSvg className='pe-2 font-2-3'  ></CallIconSvg>{number}</div>    
                            <div className=""><WorldIconSvg className='pe-2 font-2-3'  ></WorldIconSvg>{website}</div>    
                </div>

                    {/* Card bottom */}
                <div className="card-bottom row   justify-content-between background-yello mt-auto border-grey-light-top pt-3  ps-3">
                        
                        {/* Reviews  */}
                        <div className="display-flex   col-md-9">
                            <StarSection fillStars={ratingsStarCount} className="me-4 me-md-2"></StarSection>
                            {`${reviewsCount}   `} 
                            <div className="ms-2">
                                  Reviews
                            </div>
                        </div>   

                        <Button id="click-here-btn" className="col   text-color-red cursor-p   font-1-5 ">CLICK NOW</Button>    
                        {/* <Button text={" "} className='col background-primary text-color-white  font-1-5 border-radius-20 ps-4 ps-4'>Filter Now</Button>  */}

                </div>
        </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    @media(max-width:768px){     
                      /* flex-direction: column; */
                      position: relative;
        }


        .fav-icon{
                @media(max-width:768px){     
                         position: absolute;
                         top:0 ;
                         right:0 ;
                }
        }


    .details{
        /* flex-direction:column ; */
    }

    .image{
        height: 39vh;
        
        
        
        @media(max-width:728px){     
            height: 30vh;
            width: 28.333333%;
        }


        @media(max-width:507px){     
             width: 39.333333%;
        }
        @media(max-width:367px){     
            height: 27vh;

        }
        img{
            width:100%;
            height:100%;

            @media(max-width:768px){     
                border-bottom-left-radius: 0px;
            }
        }
    }


    .box-shadow-red{
        box-shadow:-2px 2px 6px 0px rgba(255, 11, 11, 0.33);
        transition:all .2s;
        
        &:hover{
            
            box-shadow:-2px 2px 12px 3px rgba(255, 11, 11, 0.33);
        }
    }

    #click-here-btn{
        @media(max-width:768px){     
                      display: none;
        }

    }

    .description{
        min-height: 4rem;

          
        @media(max-width:768px){     
                    display: block; /* Fallback for non-webkit */
                    display: -webkit-box;
                    height: 2.6em; /* Fallback for non-webkit, line-height * 2 */
                    line-height: 1.3em;
                    -webkit-line-clamp: 2; /* if you change this, make sure to change the fallback line-height and height */
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
        }




    }


    
   
`;

export default BuissnessItemCard;
