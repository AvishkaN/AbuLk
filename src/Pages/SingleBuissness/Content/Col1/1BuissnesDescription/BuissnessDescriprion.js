import styled from 'styled-components';
import StarSection from '../../../../../Components/UI/StarSection/StarSection';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import FavoriteIcon from '@mui/icons-material/FavoriteOutlined';


function BuissnessDescriptionSec({className="",
                            category,
                            location,
                            time,
                            views,
                            reviews,
                            favCount,
                                                  }) {

  return (
    <DIV className={`   buissness-description display-flex align-items-center${className}  `}>




                    {/* Buissnes col-1 */}
                    <div className="buissness-description-col-1 display-flex align-items-center">
                            <div className="display-flex     cursor-p align-items-center text-color-grey-light">
                                <SchoolOutlinedIcon className='font-2-3 me-2'></SchoolOutlinedIcon>
                                <div className="font-1-3">{category}</div>
                            </div>


                            <div className="display-flex    cursor-p align-items-center text-color-grey-light">
                                <LocationOutlinedIcon className='font-2 me-1 ms-3 '></LocationOutlinedIcon>
                                <div className="font-1-3">{location}</div>
                            </div>


                            <div className="display-flex    cursor-p align-items-center text-color-grey-light">
                                <CalendarTodayOutlinedIcon className='font-1-6 me-1 ms-3 '></CalendarTodayOutlinedIcon>
                                <div className="font-1-3">{time}</div>
                            </div>

                    </div>



                    {/* Buissnes col-2 */}
                <div className="buissness-description-col-2 display-flex align-items-center">

                
                                        {/* eye icon */}
                                    <div className="display-flex    cursor-p align-items-center text-color-grey-light">
                                        <VisibilityOutlinedIcon className='font-2 me-1  '></VisibilityOutlinedIcon>
                                        <div className="font-1-3">{views}</div>
                                    </div>


                                    {/* Star section  */}
                                    <div className="display-flex    cursor-p align-items-center   ms-3">
                                            <StarSection className=""  fillStars={reviews}></StarSection>
                                            {/* <div className="ms-2 font-1-3"> reviews</div> */}
                                    </div>


                                        {/* fav count */}
                                    <div className="display-flex    cursor-p align-items-center text-color-grey-light">
                                        <FavoriteIcon className='font-2 me-1 ms-3  text-color-red'></FavoriteIcon>
                                        <div className="font-1-3">{favCount}</div>
                                    </div>

                </div>


               







    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only BuissnessDescriptionSec */


    @media(max-width:768px){  
        
        flex-direction:column;
        
    }
    
    .buissness-description-col-1, .buissness-description-col-2{

        @media(max-width:768px){  
           
            
            & >*{
                /* flex: 1 0;  */
                margin-right: 0.5rem;
                margin-bottom: 0.25rem; 
            }
        }


        @media(max-width:375px){     
            flex-direction:column;
            align-items: flex-start !important; 

            & >*{
                margin-left: 0rem !important;

                svg{
                    margin-left: 0rem !important;
                }
            }
        }

    }

   

 
`;

export default BuissnessDescriptionSec;
