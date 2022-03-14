import styled from 'styled-components';
import { AllJobProfiles} from '../../Data/Data';
import Filter from './AlllJobsFilter/AllJobsFilter';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';
import JobItemCard from './JobItemCard';
import { ShowAllJobsPageFilterFN } from '../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



function AllJobsPage({className=""}) {

  const dispatch=useDispatch();

  useEffect(()=>{
    ScrollWindowTop();
  },[])


  const handleClick=(e)=>{
      const filterIcon=e.target.closest('.filter-icon');

      if(filterIcon){
        dispatch(ShowAllJobsPageFilterFN());
      }
  };



  return (
    <DIV className={`${className} pageFixed`} onClick={handleClick}>


         <div className="AllJobPage-wrapper row">
           
                    {/* Filter Icon mobile */}
                  <div className="text-right">
                          <i className="bi bi-sort-down  text-color-grey-ori font-3 filter-icon"></i> 
                    </div>

                  {/* Filter */}
                  <div className="display-lg-none  col-lg-3  background-aqu ">

                      <Filter></Filter>
                    
                    </div>


                  {/* All buissness list*/}
                  <div className="col-12 col-lg-9   background-gree   ps-0 pe-0" id="buissness-card-container">
                    {
                      AllJobProfiles.map(dataObj=>(
                        <JobItemCard  key={Math.random()} {...dataObj}   className=" box-shadow-normal  box-shadow-normal-hover  cursor-p" ></JobItemCard>

                      ))
                    }

                    </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AllJobsPage */
    .this-comp-green{
      color:#ABCD4E;
      
    }
    .this-comp-blue{
      color:#36A4D0;
      
    }
    .this-comp-blue-2{
      color:#9592BF;
      
    }
    
    .AllJobPage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

        .filter-icon{
          display:none;

                @media(max-width:992px){     
                            display: inline-block;
              }

        }


        }

    
`;

export default AllJobsPage;
