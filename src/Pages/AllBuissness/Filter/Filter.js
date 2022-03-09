import styled from 'styled-components';
import { AllDistricts } from '../../../Data/Data';
import CheckBoxItem from './../../../Components/UI/CheckboxItem/CheckBoxItem';



function Filter({className=""}) {
  return (
    <DIV className={`${className}`}>
                         
                  {/* Sort results by */}
              <div className="Filter-row p-3 box-shadow-normal ms-3 mt-4 mb-2 border-radius-5">
                    <div className="font-1-5 border-grey-light-bottom pb-2 fw-bold">Sort results by</div>
                    <CheckBoxItem className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto  border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem"    >  <div className='font-1-4'>Newest on top</div> </CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "  >  <div className='font-1-4'>Oldest on top</div> </CheckBoxItem>
              </div>


                  {/* Categories */}
              <div className="Filter-row p-3 box-shadow-normal ms-3 mt-4 mb-2 border-radius-5">
                    <div className="font-1-5 border-grey-light-bottom pb-2 fw-bold">Categories</div>
                    <CheckBoxItem className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto  border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem"    ><div className='font-1-4'>Resturants</div> </CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "  ><div className='font-1-4'>Univercities</div> </CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom  '  checkmarkClassName="w-2-5rem h-2-5rem "  ><div className='font-1-4'>Hardweres</div> </CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "   ><div className='font-1-4'>Resturants</div> </CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto   '  checkmarkClassName="w-2-5rem h-2-5rem " ><div className='font-1-4'>Univercities</div> </CheckBoxItem>
              </div>

                  {/* Location */}
              <div className="Filter-row p-3 box-shadow-normal ms-3 mt-4 mb-2 border-radius-5">
                    <div className="font-1-5 border-grey-light-bottom pb-2 fw-bold">Location</div>
                
                      {
                        AllDistricts.map(district=>(
                          <CheckBoxItem className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto  border-grey-light-2-bottom  '  checkmarkClassName="w-2-5rem h-2-5rem"    ><div className='font-1-4'>{district}</div> </CheckBoxItem>

                        ))
                      }
           
           
           
           
              </div>
               
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Filter */
    
    .Filter-wrapper{
      /* width: var(--Filter-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default Filter;
