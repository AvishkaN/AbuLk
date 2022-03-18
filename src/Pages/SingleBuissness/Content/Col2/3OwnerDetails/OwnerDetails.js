import styled from 'styled-components';
import Button from '../../../../../Components/UI/Button/Button';

import CallIcon from '@mui/icons-material/Call';
import EyeIcon from '@mui/icons-material/RemoveRedEye';


import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';




function OwnerDetails({
                     className="",
                     ownerImg,      
                     ownerName,
                     ownerRank,
                     
                     facebookLink,
                     twitterLink,
                     youtubeLink,
                     pinterestLink,
                  
                     mobileNum,
         
}) {

  return (
    <DIV className={` ${className}`}>


            {/* Image */}
            <div className="col-3 ms-auto me-auto p-0">
                <img src={ownerImg} className='w-100 border-radius-circle ' alt="" />
            </div>


            <div className="text-center">

                    {/* owner name */}
                    <div className="fw-bold">
                            {ownerName}
                    </div>

                    {/* owner rank test */}
                    <div className="mt-0-5- font-1-3 text-color-grey-ori ">
                            {ownerRank}
                    </div>

                    {/* social media links */}
                    <div className="social-media-icons mt-3 pb-4 border-grey-light-bottom">




                                    {/* Facebook */}
                                <a className='a  me-2' href={facebookLink}>
                                       <FacebookIcon className='contact-icon  border-radius-circle p-2 font-2-9 '></FacebookIcon>
                                </a>

                                    {/* Twitter */}
                                <a className='a ms-auto  me-2' href={twitterLink}>
                                       <TwitterIcon className='contact-icon  border-radius-circle p-2 font-2-9 '></TwitterIcon>
                                </a>

                                

                                    {/* YouTube */}
                                <a className='a ms-auto  me-2' href={youtubeLink}>
                                       <YouTubeIcon className='contact-icon  border-radius-circle p-2 font-2-9 '></YouTubeIcon>
                                </a>


                                    {/* Pinterest */}
                                <a className='a ms-auto  me-2' href={pinterestLink}>
                                       <PinterestIcon className='contact-icon  border-radius-circle p-2 font-2-9 '></PinterestIcon>
                                </a>


                                    {/* Linkding */}
                                <a className='a ms-auto' href={mobileNum}>
                                       <LinkedInIcon className='contact-icon  border-radius-circle p-2 font-2-9 '></LinkedInIcon>
                                </a>


                         

                </div>

                    {/* buttons  */}

                    <div className="display-flex align-item-center justify-content-center">
                            <Button className=" this-comp-orange font-1-3  ms-3 pt-2 ps-3 mt-4 border-radius-5 text-color-white  display-flex align-item-center" color={"grey"}>
                              
                                <CallIcon className='font-inherit'></CallIcon>
                                <div className="ms-1 font-inherit"> contact me</div>
                                
                            </Button>
                            
                            <Button className=" this-comp-grey border font-1-3  ms-3 pt-2 ps-3 mt-4 border-radius-5  display-flex align-item-center" color={"grey"}>
                              
                                <EyeIcon className='font-inherit'></EyeIcon>
                                <div className="ms-1 font-inherit"> see all photos</div>
                                
                            </Button>

                            {/* <Button className=" this-comp-grey border  font-1-4  ms-3 pt-2 ps-3 mt-4 border-radius-5" color={"grey"}>see all photos </Button> */}

                    </div>

            </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only OwnerDetails */
    
 
`;

export default OwnerDetails;
