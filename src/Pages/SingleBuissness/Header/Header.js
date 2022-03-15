import styled from 'styled-components';
import StarSection from '../../../Components/UI/StarSection/StarSection';
import Button from '../../../Components/UI/Button/Button';

import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIcon from '@mui/icons-material/LocalPhoneOutlined';

import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/StarOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';


const backgroundImg ="https://www.spruko.com/demo/bizdire/Bizdire/assets/images/products/products/prism.png";

function Header({className="",SingleBuissnessData}) {



  return (
    <DIV className={`${className}   text-color-white display-flex flex-direction-column `}  backgroundImg={""}>

        {/* Center */}
         <div className="center display-flex flex-direction-column align-item-center justify-content-center mt-auto">
             {/* Name */}
            <div className="font-3-5 fw-bold ">{SingleBuissnessData.BuissnessName}</div>

             {/* Reviews */}
             <div className="display-flex align-items-center mt-2 ">
                        <StarSection className=""  fillStars={SingleBuissnessData.ReviewsCount}></StarSection>
                        <div className="ms-2">{SingleBuissnessData.ReviewsCount} reviews</div>
             </div>

             {/* Social media icons */}
                <div className="social-media-icons mt-2">

                            {/* Facebook */}
                        <a className='a' href={SingleBuissnessData.socialMediaLinks.facebook}>
                        <FacebookIcon className='icon p-2 font-2-7 border-radius-circle'></FacebookIcon>
                        </a>

                            {/* Twitter */}
                        <a className='a ms-auto' href={SingleBuissnessData.socialMediaLinks.facebook}>
                        <TwitterIcon className='icon p-2 font-2-7 border-radius-circle'></TwitterIcon>
                        </a>

                            {/* Rss */}
                        <a className='a ms-auto' href={SingleBuissnessData.socialMediaLinks.facebook}>
                        <RssFeedIcon className='icon p-2 font-2-7 border-radius-circle'></RssFeedIcon>
                        </a>

                            {/* YouTube */}
                        <a className='a ms-auto' href={SingleBuissnessData.socialMediaLinks.facebook}>
                        <YouTubeIcon className='icon p-2 font-2-7 border-radius-circle'></YouTubeIcon>
                        </a>


                            {/* Linkding */}
                        <a className='a ms-auto' href={SingleBuissnessData.socialMediaLinks.facebook}>
                        <LinkedInIcon className='icon p-2 font-2-7 border-radius-circle'></LinkedInIcon>
                        </a>


                         

                </div>

             {/* buttons */}
             <div className="buttonss display-flex align-items mt-4">

                 {/* Add wishlist  */}
                 <Button className="display-flex justify-content-center  pt-2 pb-2  align-items-center text-color-white this-comp-blue">
                     <FavoriteIcon className=''></FavoriteIcon>
                     <div className='font-1-6  ms-1 '>Add Wishlist</div>
                 </Button>
                 
                 <Button className="display-flex justify-content-center  ms-2 pt-2 pb-2  align-items-center text-color-white this-comp-green">
                     <StarIcon className=''></StarIcon>
                     <div className='font-1-6  ms-1 '> Write Review</div>
                 </Button>
                 
                 <Button className="display-flex justify-content-center  ms-2 pt-2 pb-2  align-items-center text-color-white this-comp-red">
                     <InfoIcon className=''></InfoIcon>
                     <div className='font-1-6  ms-1 '> Report Abuse</div>
                 </Button>
                 
             </div>

         </div>


        {/* bottom */}
        <div className="bottom  mt-auto pt-2 pb-2">

            <div className="w-85 ms-auto me-auto row ">

                    {/* location */}
                    <div className="display-flex align-items-center  col">
                            <LocationIcon className="icon p-2 font-3-4 border-radius-circle me-2"></LocationIcon>
                            <div className="">{SingleBuissnessData.location}</div>
                    </div>


                    {/* phone number */}
                        <div className="display-flex align-items-center ms-auto ">
                                <PhoneIcon className="icon p-2 font-3-4 border-radius-circle me-2"></PhoneIcon>
                                <div className="font-1-6">{SingleBuissnessData.phoneNumber}</div>
                        </div>
            </div>




        </div>
    </DIV>
  );
}


const DIV=styled.div`


            /* background-image: linear-gradient(to right bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${props => props.backgroundImg}); */
            background-image: linear-gradient(to right bottom, rgba(0, 20, 142, 0.86), rgba(0, 20, 142, 0.46)),url(${backgroundImg});
            background-size: auto;
            min-height:430px; 
            /* background-position: 48% 47%; */


    .this-comp-blue{
        background-color:#0ab2e6;
    }
    .this-comp-green{
        background-color:#10d403;
    }
    .this-comp-red{
        background-color:#d60f02;
    }


    .social-media-icons{
        .icon{ 

            background-color:rgba(0, 0, 0, 0.35);
        }
    }

    .buttonss{

        @media(max-width:440px){     
            flex-wrap:wrap;
            justify-content: space-around;
        }

        button{

            @media(max-width:440px){     
                width: 48%;
                margin-bottom: 1rem; 
                margin-left:0 !important;
            }
        }

    }


    .bottom{
        background:rgba(0, 0, 0, 0.2);


        .icon{
            background: rgba(255, 255, 255, 0.1);
        }
    }
   
`;

export default Header;
