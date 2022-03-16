import styled from 'styled-components';
import StarSection from '../../../../../Components/UI/StarSection/StarSection';
import CheckIcon from '@mui/icons-material/CheckCircle';



// other icons
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import CallIcon from '@mui/icons-material/CallOutlined';


function RealedPostItem({
                                        className="",
                                        image,
                                        category,
                                        reviewStarCount,
                                        BuissnesName,
                                        isVerfiifed,
                                        otherInfo,
                }) {

  return (
    <DIV className={`${className}`}>

                    {/* Image */}
                    <div className="image transiiton-default">
                            <img src={image} className='w-100' alt="" />
                    </div>

                    {/* description*/}
                    <div className="ps-4 pe-3 pt-2 pb-5">

                     {/* Start Section */}
                     <StarSection className="mt-4"  fillStars={reviewStarCount}></StarSection>


                        {/* Buissness Name */}
                    <div className="display-flex align-items-center">
                             <div className="fw-bold">{BuissnesName}</div>
                             {isVerfiifed && <CheckIcon className='this-comp-green-text font-1-9 ms-2 '></CheckIcon>}

                    </div>

                        {/* Other deatils */}
                        <div className="mt-2 row ">

                            <div className="display-flex cursor-p  text-color-grey-ori col-6 align-items-center">
                                <LocationIcon className=''></LocationIcon>
                                <div className="font-1-3 ms-2">{otherInfo.location}</div>
                            </div>

                            <div className="display-flex cursor-p  text-color-grey-ori col-6 align-items-center">
                                <CalendarIcon className=''></CalendarIcon>
                                <div className="font-1-3 ms-2">{otherInfo.createdTime}</div>
                            </div>

                            <div className="display-flex cursor-p  text-color-grey-ori col-6 align-items-center">
                                <PersonIcon className=''></PersonIcon>
                                <div className="font-1-3 ms-2">{otherInfo.owner}</div>
                            </div>

                            <div className="display-flex cursor-p  text-color-grey-ori col-6 align-items-center">
                                <CallIcon className=''></CallIcon>
                                <div className="font-1-3 ms-2">{otherInfo.phone}</div>
                            </div>

                        </div>
                     </div>

    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RealedPostItem */
    
    .image{

        &:hover{
        }
    }
    
    &:hover .image{
        transform: scale(1.1);

    }
`;

export default RealedPostItem;
