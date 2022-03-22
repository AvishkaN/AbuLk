import styled from 'styled-components';
import Location from './1Location/Location';
import OpeningHours from './2OpeningHours/OpeningHours';
import LocationCol2 from './3LocationCol2/LocationCol2';

import {  SingleJobPageData  } from '../../../Data/Data';



function Col2({className="",Col2Data}) {

  return (
    <DIV className={`${className}`}>
       

        <Location className='mt-5'  bottomData={Col2Data.location.list} title={Col2Data.location.title}  icon={Col2Data.location.icon} ></Location>
        <OpeningHours className='mt-5'  bottomData={Col2Data.openingHours.list} title={Col2Data.openingHours.title}  icon={Col2Data.openingHours.icon} ></OpeningHours>
        
        <LocationCol2 className='mt-5'  bottomData={Col2Data.locationCol2.mapLink} title={Col2Data.locationCol2.title}  icon={Col2Data.locationCol2.icon} ></LocationCol2>
    
    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Col2 */
    
 
`;

export default Col2;
