import styled from 'styled-components';

import PopUp from '../PopUp/PopUp';
import AllJobsFilter from '../../../Pages/AllJobs/AlllJobsFilter/AllJobsFilter';
import Button from '../../UI/Button/Button';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';




function AllJobsPageFilterPopUp({className=""}) {
  const dispatch=useDispatch();




  return (
    <DIV className={`${className} row`}>
           <PopUp to="/">

               <div className="display-flex ">
                            <h2 className='fw-bold'>Filter Jobs</h2>
                </div>


                    <div className=" background-yello ">

                            <AllJobsFilter></AllJobsFilter>
                            <div className="text-right mt-4">
                                    <Button  text={" "} className='background-primary text-color-white  font-1-5 border-radius-20 ps-4 ps-4'>Filter Now</Button> 
                            </div>

                        
                    </div>


              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AllJobsPageFilterPopUp */
    

`;

export default AllJobsPageFilterPopUp;
