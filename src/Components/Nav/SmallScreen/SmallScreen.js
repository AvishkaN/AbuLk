import styled from 'styled-components';
import SmallScreenCard from './SmallScreenCard';

import ApartmentIcon from '@mui/icons-material/Apartment';

import Car from '@mui/icons-material/DirectionsCarFilledOutlined';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import FactoryIcon from '@mui/icons-material/Factory';

import ChairIcon from '@mui/icons-material/Chair';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';




function SmallScreen({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SmallScreen-wrapper">
                <div className="row gy-3">  
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard  className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<ApartmentIcon className='text-color-primary font-2-5'></ApartmentIcon>}    text={"Property "} secondtext={"for Rent"}></SmallScreenCard>
                    </div>
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<MapsHomeWorkIcon className='text-color-primary font-2-5'></MapsHomeWorkIcon>}    text={"Property "} secondtext={"for Sale"}></SmallScreenCard>
                    </div>
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<ApartmentIcon className='text-color-primary font-2-5'></ApartmentIcon>}    text={"Property "} secondtext={"Rooms for Rent"}></SmallScreenCard>
                    </div>

                    
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<Car className='text-color-primary font-2-5'></Car>}    text={"Motors "} secondtext={""}></SmallScreenCard>
                    </div>
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<LocalLaundryServiceIcon className='text-color-primary font-2-5'></LocalLaundryServiceIcon>}    text={"Classified "} secondtext={""}></SmallScreenCard>
                    </div>
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<ChairIcon className='text-color-primary font-2-5'></ChairIcon>}    text={"Furniture &  "} secondtext={"Garden "}></SmallScreenCard>
                    </div>

                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<PhoneAndroidIcon className='text-color-primary font-2-5'></PhoneAndroidIcon>}    text={"Mobile Phones "} secondtext={"& Tablets  "}></SmallScreenCard>
                    </div>
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<GroupIcon className='text-color-primary font-2-5'></GroupIcon>}    text={"Community "} secondtext={""}></SmallScreenCard>
                    </div>
                    <div className="col-4 cursor-p">
                    
                         <SmallScreenCard   className='ms-1 mt-2 mb-2 me-1 pt-2'  svgIcon={<WorkIcon className='text-color-primary font-2-5'></WorkIcon>}    text={"Jobs "} secondtext={""}></SmallScreenCard>
                    </div>




                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SmallScreen */
    
    .SmallScreen-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default SmallScreen;
