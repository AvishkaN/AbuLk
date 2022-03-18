import styled from 'styled-components';
import {SingleBuissnessData} from '../../../../Data/Data';
import CommonComp from './CommonComp';
import CompanyDetails from './1CompanyDetails/CompanyDetails';
import ListingLocation from './2ListingLocation/ListingLocation';



function Col2({className=""}) {
  
  return (
    <DIV className={`${className}`}>

          

          {/* Company componnets */}
            <CommonComp className="" Title={"company user"}>

                      <div className="">
                           <CompanyDetails className='' col2Data={SingleBuissnessData.col2Data}  contactSection={SingleBuissnessData.imgSliderSection.contactSection} ></CompanyDetails>

                      </div>

            </CommonComp>

            
          {/* Company componnets */}
            <CommonComp className="mt-5" Title={"Listing Location"}>

                           <ListingLocation className='ps-5 pe-5'   
                                      src={SingleBuissnessData.col2Data.locationUrl}  
                                      location={SingleBuissnessData.col2Data.location}  
                                      contactSection={SingleBuissnessData.imgSliderSection.contactSection} >

                          </ListingLocation>

            </CommonComp>


    </DIV>
  );
}


const DIV=styled.div`
    
   
`;

export default Col2;
