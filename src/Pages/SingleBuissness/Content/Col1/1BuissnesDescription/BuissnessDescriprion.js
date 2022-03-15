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
    <DIV className={`${className} display-flex align-items-center`}>


                <div className="display-flex  cursor-p align-items-center text-color-grey-light">
                    <SchoolOutlinedIcon className='font-2-3 me-2'></SchoolOutlinedIcon>
                    <div className="font-1-3">{category}</div>
                </div>


                <div className="display-flex  cursor-p align-items-center text-color-grey-light">
                    <LocationOutlinedIcon className='font-2 me-1 ms-3 '></LocationOutlinedIcon>
                    <div className="font-1-3">{location}</div>
                </div>

                <div className="display-flex  cursor-p align-items-center text-color-grey-light">
                    <CalendarTodayOutlinedIcon className='font-1-6 me-1 ms-3 '></CalendarTodayOutlinedIcon>
                    <div className="font-1-3">{time}</div>
                </div>

                <div className="display-flex  cursor-p align-items-center text-color-grey-light">
                    <VisibilityOutlinedIcon className='font-2 me-1 ms-3 '></VisibilityOutlinedIcon>
                    <div className="font-1-3">{views}</div>
                </div>


                {/* Star section  */}
                <div className="display-flex  cursor-p align-items-center   ms-3">
                        <StarSection className=""  fillStars={reviews}></StarSection>
                        <div className="ms-2 font-1-3"> reviews</div>
                </div>


                    {/* fav count */}
                <div className="display-flex  cursor-p align-items-center text-color-grey-light">
                    <FavoriteIcon className='font-2 me-1 ms-3  text-color-red'></FavoriteIcon>
                    <div className="font-1-3">{favCount}</div>
                </div>



    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only BuissnessDescriptionSec */
    
 
`;

export default BuissnessDescriptionSec;
