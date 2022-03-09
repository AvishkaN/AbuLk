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
        <div className="col-md-3 background-yello ">

            <Filter></Filter>
          
          </div>


        {/* All buissness list*/}
        <div className="col-md-9  background-gree ">
          {
            AllbuissnessData.map(dataObj=>(
              <BuissnessItemCard  key={Math.random()} {...dataObj} className="mt-4 ms-1  box-shadow-normal box-shadow-normal-hover cursor-p  " ></BuissnessItemCard>

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
