import styled from 'styled-components';
import {AllResturantData} from '../../Data/Data';
import { useDispatch } from 'react-redux';
import ResturantCardItem from './AllResturantCard';



function AllResturantPage({className=""}) {

  const dispatch=useDispatch();


  return (
    <DIV className={`${className} pageFixed`} >
         <div className="AllResturantPage-wrapper ">
                    {/* All Resturants  */}
                    <div className="mt-4 row justify-content-between">
                          {
                            AllResturantData.map(dataObj=>(
                              <ResturantCardItem  key={Math.random()} {...dataObj}   className="reaturant-cart-item " ></ResturantCardItem>

                            ))
                          }
                    </div>
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
          
          
          @media(max-width:992px){     
            width: 100%;
        }

        }

    }
`;

export default AllResturantPage;
