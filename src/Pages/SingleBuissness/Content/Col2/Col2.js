import styled from 'styled-components';
import {SingleBuissnessData} from '../../../../Data/Data';
import CommonComp from './CommonComp';
import CompanyDetails from './1CompanyDetails/CompanyDetails';



function Col2({className=""}) {
  
  return (
    <DIV className={`${className}`}>

          

            <CommonComp className="" Title={"company user"}>

                      <div className="">
                           <CompanyDetails className='' col2Data={SingleBuissnessData.col2Data}  contactSection={SingleBuissnessData.imgSliderSection.contactSection} ></CompanyDetails>

                      </div>

            </CommonComp>


    </DIV>
  );
}


const DIV=styled.div`
    
   
`;

export default Col2;
