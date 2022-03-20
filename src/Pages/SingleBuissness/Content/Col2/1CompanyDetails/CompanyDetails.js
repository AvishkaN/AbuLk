import { useState } from 'react';
import styled from 'styled-components';

import TIming from './TIming';
import ContactInfo from './ContactInfo';

import ButtonOutline from '../../../../../Components/UI/Button/ButtonOutline';
import Button from '../../../../../Components/UI/Button/Button';

import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import EyeIcon from '@mui/icons-material/RemoveRedEye';


function CompanyDetails({className="",col2Data,contactSection}) {

    const [contentNav,setContentNav]=useState(true);

    const handleClick=(e)=>{

        const navBtn=e.target.closest('.nav-btn');

        if(navBtn){
            setContentNav(!contentNav);
        }

    };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
            {/* image section */}
            <div className="pb-4">

                <div className="col-5 ms-auto me-auto ">
                    <img src={col2Data.buissnessImgLogo} className='w-100' alt="" />
                </div>


                <div className="text-center  mt-0-5- ">
                        {/* buissness title */}
                        <div className="fw-bold ">{col2Data.buissnessName}</div>
                        <div className="font-1-3 mt-0-5- text-color-grey-ori">member since november {col2Data.listenDate}</div>
                        <div className="font-1-2  "><span className='text-color-grey-ori font-inherit'>listing id</span> <span className='fw-bold font-inherit'>{col2Data.listenId}</span> </div>

                </div>

            </div>


            {/* nav section with content */}

            <div className="border-grey-light-top">

                {/* nav */}
                <div className=" row ms-5 me-5 mt-4">
                    <ButtonOutline className="nav-btn col me-2  pt-2 pb-2  fw-bold font-1-4" color={`${contentNav?"#ff8c20":"grey"}`}>contact</ButtonOutline>
                    <ButtonOutline className="nav-btn col ms-2  pt-2 pb-2  fw-bold font-1-4" color={`${!contentNav?"#ff8c20":"grey"}`}>timings</ButtonOutline>
                </div>

                    {/* content */}
                <div className="content">

                         {/* contact info */}
                            {contentNav && <ContactInfo contentNav={contentNav} contactSection={contactSection} ></ContactInfo>}

                         {/* timings */}
                            {!contentNav && <TIming contentNav={contentNav} ></TIming>}

                </div>

            </div>

            {/* Bottom */}
            <div className="buttonss display-flex align-items mt-4 ps-5 pe-5 border-top pt-4 mt-5">

                {/* Add wishlist  */}
                <Button className="display-flex justify-content-center  pt-2 pb-2  align-items-center text-color-white this-comp-blue">
                    <MailIcon className=''></MailIcon>
                    <div className='font-1-3  ms-1 '>chat</div>
                </Button>

                <Button className="display-flex justify-content-center  ms-2 pt-2 pb-2  align-items-center text-color-white this-comp-orange">
                    <PersonIcon className=''></PersonIcon>
                    <div className='font-1-3  ms-1 '> contact me </div>
                </Button>

                <Button className="display-flex justify-content-center  ms-2 pt-2 pb-2  align-items-center border  this-comp-grey ">
                    <EyeIcon className=''></EyeIcon>
                    <div className='font-1-3  ms-1 '> all listings</div>
                </Button>

            </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

                .buttonss{

                @media(max-width:1300px){     
                    flex-wrap:wrap;
                    justify-content: space-around;
                }

                @media(max-width:1300px){     
                    flex-wrap:wrap;
                    justify-content: space-around;
                }

                button{

                    @media(max-width:1300px){     
                        width: 48%;
                        margin-bottom: 1rem; 
                        margin-left:0 !important;
                    }
                }

                }
    
 
`;

export default CompanyDetails;
