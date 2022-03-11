import styled from 'styled-components';

import LocationIconSvg from '@mui/icons-material/LocationOnOutlined';
import FavoriteIconSvg from '@mui/icons-material/FavoriteBorder';
// import FavIconFilled from '../../Components/UI/FavIcon/FavIcon';
import PhoneIphoneIconSvg from '@mui/icons-material/PhoneAndroidOutlined';

import StarSection from '../../../Components/UI/StarSection/StarSection';
import Button from '../../../Components/UI/Button/Button';
import { Currency } from '../../../Data/Data';



function ResturantCardItem({
    className="",
    tag,
    image,
    category,
    categoryIconSvg,
    isOpenNow,
    Name,
    StarCount,
    Reviews,
    startPirce,
    endPrice,
    phoneNumber,
    loacation,
    IsSaved,
}) {
  return (
    <DIV className={`row m-2 box-shadow  cursor-p ps-0 pe-0 border-radius-5 mb-4 ${className} `} IsOpenNow={isOpenNow}>
      
        {/* category row */}
        <div className="ps-0">

            <div className="category-row display-flex align-item-center ps-3 pt-2 pe-3 pb-2 w-100">
                        {/* category icon  */}
                        <div className="category-icon p-2 border-radius-circle display-flex align-items-center justify-content-between">
                                {categoryIconSvg}
                        </div>

                        {/* category name */}
                        <div className="ms-3 fw-bold">{category}</div>

                        {/* category button */}
                        {/* <Button className={`font-1-2 text-color-white ms-auto  `} >{isOpenNow ?'OPEN':"CLOSE"}</Button> */}
                        {/* <div className="font-1-2">{isOpenNow ?'OPEN':"CLOSE"}</div> */}

            </div>


        </div>


        <div className="cart-container row">

                    {/* Image */}
                    <div className="image col-4 col-lg-12 ps-0 pe-0 ">
                            <img src={image} alt="" className='w-100 h-100' />    
                    </div>

                    {/* Details */}
                    <div className="col col-lg-12 ps-0 pe-0 ">
                    

                            {/* Other Details */}
                        <div className="ps-3 pe-2  pb-1">
                                        {/* Resturant Name */}
                                        <div className="fw-bold  mt-1">{Name}</div>

                                        {/* Reviews Section */}
                                        <div className="display-flex">
                                            <StarSection className="" fillStars={StarCount}></StarSection>
                                            <div className="text-color-grey-light font-1-3 ms-2">{`(${Reviews} Reviews)`}</div>
                                        </div>

                                        {/* Price Range */}
                                        <div className="mt-1 font-1-4">
                                                <span className='font-inherit '>{Currency}{startPirce}</span>
                                                <span className='ms-2 font-inherit '>-</span>
                                                <span className='ms-2 font-inherit '>{Currency}{endPrice}</span>
                                        </div>

                                        {/* Mobile Phone Number */}
                                        <div className="text-color-grey-light display-flex align-items-center mt-1 mb-1">
                                            <PhoneIphoneIconSvg className=''></PhoneIphoneIconSvg>    
                                            <div className="font-1-3">{phoneNumber}</div>
                                        </div>

                                        {/* Resturant Card Bottom */}
                                        <div className="border-top ">
                                                
                                                    <div className="display-flex align-items-center text-color-grey-light  pt-1">
                                                            <LocationIconSvg className=' font-1-3 text-color-primary  '></LocationIconSvg>
                                                            <div className="font-1-3">{loacation}</div>

                                                            <FavoriteIconSvg className='ms-auto font-2-2 text-color-primary  me-2 fav-icon'></FavoriteIconSvg>
                                            
                                                    </div>
                                        </div>

                        </div>

                    </div>


        </div>
            

    </DIV>
  );
}


const DIV=styled.div`
/* clip-path: polygon(56% 0, 100% 100%, 57% 100%, 0 100%, 0 0); */
box-shadow:-8px 6px 9px 0 rgba(0 ,0 ,0 ,0.1);

/* background-color:red; */

.box-shadow{
    /* box-shadow:9px 11px 16px 0 rgba(0, 0, 0, 0.1); */
}



.category-row{
    background-color:#FED74E;
    clip-path: polygon(55.35% 1px, 90.09% 1%, 97.63% 97.5%, 0px 100%, 0px 0px);

    .category-icon{
        background-color:#FE3350;
        outline: #fdfdfd solid 2px;
        
    }
    
    button{
        background-color:${props => props.IsOpenNow? `#3EC04A`:`#FE3350`};

    }

}

.cart-container{
    position: relative;


    .image{

        @media(max-width:465px){     
                      width: 132px;
                      height: 106px;
                      display:flex; 

                      
        }

        @media(max-width:377px){     
                    width: 117px;
                     height: 86px;
                      
        }

        @media(max-width:341px){     
            width: 108px;
            height: 77px;
                      
        }
        
        img{
            @media(max-width:465px){     
            }

        }




    }
}

.fav-icon{
    position: absolute;
    top: 2%;
    right: 3%;
}

    
   
`;

export default ResturantCardItem;
