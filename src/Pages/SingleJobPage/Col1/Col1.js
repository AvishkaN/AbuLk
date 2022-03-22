import styled from 'styled-components';

import JObDetails from './1JobDetails/JObDetails';
import JobDescription from './2jobDescription/JobDescription';
import JobSkill from './3jobSkill/JobSkill';
import Location from './4Location/Location';
import Requirments from './5Requirments/Requirments';





function Col1({className="",Col1Data}) {

  return (
    <DIV className={`${className}`}>

        <JObDetails   className='mt-5'   {...Col1Data.jobDetails} ></JObDetails>


        <JobDescription   className='mt-5'   bottomData={Col1Data.jobDescription.description} title={Col1Data.jobDescription.title} ></JobDescription>
        <JobSkill  className='mt-5'   bottomData={Col1Data.jobSkill.list} title={Col1Data.jobSkill.title} ></JobSkill>
        <Location   className='mt-5'  bottomData={Col1Data.location.mapLink} title={Col1Data.location.title} ></Location>
        <Requirments   className='mt-5'  bottomData={Col1Data.Requirments.list} title={Col1Data.Requirments.title} ></Requirments>

    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Col1 */
    
 
`;

export default Col1;
