import styled from 'styled-components';
import { AllDistricts, AllJobsFilterByCity, AllJobsFilterByExperince, AllJobsFilterByTitle } from '../../../Data/Data';
import CheckBoxItem from '../../../Components/UI/CheckboxItem/CheckBoxItem';
import LimitedCheckBoxSection from '../../../Components/UI/LimitedCheckBoxesSection/LimitedCheckBoxesSection';



function Filter({className=""}) {
  return (
    <DIV className={`${className}`}>
                         
                  {/* Sort results by */}
              {/* <div className="Filter-row p-3 box-shadow-normal ms-3 mt-4 mb-2 border-radius-5   me-2">
                    <div className="font-1-5 border-grey-light-bottom pb-2 fw-bold">Sort results by</div>
                    <CheckBoxItem className='mt-3 text-color-grey-light   w-95  pb-2  ms-auto me-auto  border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem"    >  <div className='font-1-4'>Newest on top</div> </CheckBoxItem>
                    <CheckBoxItem  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "  >  <div className='font-1-4'>Oldest on top</div> </CheckBoxItem>
              </div> */}

              <div className="box-shadow-normal ms-2 me-3 mt-2">


                <LimitedCheckBoxSection
                      className=''
                      title="Jobs By Title"
                      checkBoxdata={AllJobsFilterByTitle}
                      titleClassName="fw-bold"
                      ShowTextClassName="text-color-link fw-bold pt-3"
                      showDataCount={5}
                />


                <LimitedCheckBoxSection
                      className='mt-3'
                      title="Jobs By City"
                      checkBoxdata={AllJobsFilterByCity}
                      titleClassName="fw-bold"
                      ShowTextClassName="text-color-link fw-bold pt-3"
                      showDataCount={6}
                />

                <LimitedCheckBoxSection
                      className='mt-3'
                      title="Jobs By Experience"
                      checkBoxdata={AllJobsFilterByExperince}
                      titleClassName="fw-bold"
                      ShowTextClassName="text-color-link fw-bold pt-3"
                      showDataCount={3}
                />

              </div>



              {/* <LimitedCheckBoxSection
                    className='ms-2 me-3'
                    title="Jobs By City"
                    checkBoxdata={AllDistricts}
                    titleClassName="fw-bold"
                    ShowTextClassName="text-color-link fw-bold pt-3"
                    showDataCount={6}
              /> */}




                


          
               
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
