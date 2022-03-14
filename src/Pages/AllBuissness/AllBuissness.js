import styled from 'styled-components';
import {AllbuissnessData} from '../../Data/Data';
import {AllDistricts} from '../../Data/Data';
import Filter from './Filter/Filter';
import BuissnessItemCard from './BuissnessItemCard';
import { ShowAllBuissnessPageFilterFN } from '../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';



function AllBuissnessPage({className=""}) {

  const dispatch=useDispatch();


  const handleClick=(e)=>{
      const filterIcon=e.target.closest('.filter-icon');

      if(filterIcon){
        dispatch(ShowAllBuissnessPageFilterFN());
      }
  };



  return (
    <DIV className={`${className} pageFixed`} onClick={handleClick}>
         <div className="AllBuissnessPage-wrapper row">


            {/* Filter Icon mobile */}
           <div className="text-right">
                  <i className="bi bi-sort-down  text-color-grey-ori font-3 filter-icon"></i> 
            </div>

        {/* Filter */}
        <div className="display-lg-none  col-lg-3  background-yello ">

            <Filter></Filter>
          
          </div>


        {/* All buissness list*/}
        <div className="col-12 col-lg-9   background-gree row  ps-0 pe-0" id="buissness-card-container">
          {
            AllbuissnessData.map(dataObj=>(
              <BuissnessItemCard  key={Math.random()} {...dataObj}   className=" buissnessItemCard  col-md-12 mt-4 ms-1  box-shadow-normal box-shadow-normal-hover cursor-p  " ></BuissnessItemCard>

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


        #buissness-card-container{
           
        @media(max-width:768px){     
               
             justify-content: space-between;
        }     
        
        
        .buissnessItemCard{
          
              @media(max-width:768px){     
                  /* width:48%; */
              }
          
              @media(max-width:600px){     
                /* width: 64%; */
                margin-left: auto !important;
                margin-right: auto;
                margin-bottom: 1rem!important;
              }
              @media(max-width:462px){     
                /* width: 75%; */
              }
              @media(max-width:380px){     
                /* width: 87%; */
              }
        }
        
        }

        .filter-icon{
          display:none;

                @media(max-width:992px){     
                            display: inline-block;
              }

        }


        }

    
`;

export default AllBuissnessPage;
