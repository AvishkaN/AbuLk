import styled from 'styled-components';
import {SingleBuissnessData} from '../../../../Data/Data';
import CommonComp from './CommonComp';
import CompanyDetails from './1CompanyDetails/CompanyDetails';
import ListingLocation from './2ListingLocation/ListingLocation';
import OwnerDetails from './3OwnerDetails/OwnerDetails';
import SearchListing from './4SearchListing/SearchListing';
import RecentBuissnessPost from './5RecentBuissnessPost/RecentBuissnessPost';



function Col2({className=""}) {
  
  return (
    <DIV className={`${className}`}>

          

          {/* Company componnets */}
            <CommonComp className="" Title={"company user"}>

                      <div className="">
                           <CompanyDetails className='' col2Data={SingleBuissnessData.col2Data}  contactSection={SingleBuissnessData.imgSliderSection.contactSection} ></CompanyDetails>

                      </div>

            </CommonComp>

            
          {/* Location componnets */}
            <CommonComp className="mt-5" Title={"Listing Location"}>

                           <ListingLocation className='ps-5 pe-5'   
                                      src={SingleBuissnessData.col2Data.locationUrl}  
                                      location={SingleBuissnessData.col2Data.location}  
                                      contactSection={SingleBuissnessData.imgSliderSection.contactSection} >

                          </ListingLocation>

            </CommonComp>


          {/* Owner componnets */}
            <CommonComp className="mt-5" Title={"Listing Owner"}>

                           <OwnerDetails className='ps-3 pe-2'   
                                    {...SingleBuissnessData.col2Data.ownerDetails}   >

                          </OwnerDetails>

            </CommonComp>


          {/* Search Listing */}
            <CommonComp className="mt-5" Title={"Search Listing"}>

                <SearchListing className='pb-3 ' searchList={SingleBuissnessData.col2Data.searchList}></SearchListing>
                        
            </CommonComp>



          {/* Recent Post */}
            <CommonComp className="mt-5" Title={"Recent Buissness Post"}>

                <RecentBuissnessPost className='pb-3 ' recentPost={SingleBuissnessData.col2Data.recentPost}></RecentBuissnessPost>
                        
            </CommonComp>


    </DIV>
  );
}


const DIV=styled.div`
    
   
`;

export default Col2;
