import styled from 'styled-components';
import {AllbuissnessData} from '../../Data/Data';
import {AllDistricts} from '../../Data/Data';
import Filter from './Filter/Filter';
import BuissnessItemCard from './BuissnessItemCard';



function AllBuissnessPage({className=""}) {
  return (
    <DIV className={`${className} pageFixed`}>
         <div className="AllBuissnessPage-wrapper row">

        {/* Filter */}
        <div className="display-lg-none  col-lg-3  background-yello ">

            <Filter></Filter>
          
          </div>


        {/* All buissness list*/}
        <div className="col-12 col-lg-9   background-gree row" id="buissness-card-container">
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
             width:48%;
        }
        }
        
        }


        }

    }
`;

export default AllBuissnessPage;
