import styled from 'styled-components';
import {AllResturantData} from '../../Data/Data';
import { useDispatch } from 'react-redux';
import ResturantCardItem from './AllResturantCard';



function AllResturantPage({className=""}) {

  const dispatch=useDispatch();


  return (
    <DIV className={`${className} pageFixed`} >
         <div className="AllResturantPage-wrapper row">
                    <h1>all Resturant</h1>
                    {/* All Resturants  */}
                    {
                      AllResturantData.map(dataObj=>(
                        <ResturantCardItem  key={Math.random()} {...dataObj}   className="reaturant-cart-item" ></ResturantCardItem>

                      ))
                    }
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .AllResturantPage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

        .reaturant-cart-item{
          width: 30%;
        }

    }
`;

export default AllResturantPage;
