import styled from 'styled-components';
import Location from './1Location/Location';
import OpeningHours from './2OpeningHours/OpeningHours';

import {  SingleJobPageData  } from '../../../Data/Data';



function Col2({className="",Col2Data}) {

  return (
    <DIV className={`${className}`}>
       

        <Location className='mt-5'  bottomData={Col2Data.location.list} title={Col2Data.location.title}  icon={Col2Data.location.icon} ></Location>
        {/* <OpeningHours className=''  bottomData={Col2Data.jobDescription.description} title={Col2Data.jobDescription.title}  ></OpeningHours> */}
    
    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Col2 */
    
 
`;

export default Col2;
