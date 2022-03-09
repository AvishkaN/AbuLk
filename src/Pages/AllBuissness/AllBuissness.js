import styled from 'styled-components';
import {AllbuissnessData} from '../../Data/Data';
import {AllDistricts} from '../../Data/Data';
import CheckBoxItem from './../../Components/UI/CheckboxItem/CheckBoxItem';
import BuissnessItemCard from './BuissnessItemCard';



function AllBuissnessPage({className=""}) {
  return (
    <DIV className={`${className} pageFixed`}>
         <div className="AllBuissnessPage-wrapper row">

        {/* Filter */}
        <div className="col-md-3 background-yello ">

                 
                  {/* Categories */}
              <div className="Filter-row p-3 box-shadow-normal ms-3 mt-4 mb-2 border-radius-5">
                    <div className="font-1-7 border-grey-light-bottom pb-2 fw-bold">Categories</div>
                    <CheckBoxItem className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto  border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem"    >Resturants</CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "  >Univercities</CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom  '  checkmarkClassName="w-2-5rem h-2-5rem "  >Hardweres</CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "   >Resturants</CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto   '  checkmarkClassName="w-2-5rem h-2-5rem " >Univercities</CheckBoxItem>
              </div>

                  {/* Location */}
              <div className="Filter-row p-3 box-shadow-normal ms-3 mt-4 mb-2 border-radius-5">
                    <div className="font-1-7 border-grey-light-bottom pb-2 fw-bold">Location</div>
                
                      {
                        AllDistricts.map(district=>(
                          <CheckBoxItem className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto  border-grey-light-2-bottom  '  checkmarkClassName="w-2-5rem h-2-5rem"    >{district}</CheckBoxItem>

                        ))
                      }
           
           
           
           
              </div>
               


          
          
          
          </div>


        {/* All buissness list*/}
        <div className="col-md-9  background-gree ">
          {
            AllbuissnessData.map(dataObj=>(
              <BuissnessItemCard {...dataObj} className="mt-4 box-shadow-normal " ></BuissnessItemCard>

            ))
          }

          </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AllBuissnessPage */
    
    .AllBuissnessPage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default AllBuissnessPage;
