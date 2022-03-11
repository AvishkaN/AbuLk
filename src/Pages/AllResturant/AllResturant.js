import styled from 'styled-components';
import {AllResturantData} from '../../Data/Data';
import { useDispatch } from 'react-redux';
// import ResturantCardItem from './AllResturantCard';
import AllResturantCardMobile from './Mobile/AllResturantCardMobile';



function AllResturantPage({className=""}) {

  const dispatch=useDispatch();


  return (
    <DIV className={`${className} pageFixed`} >
         <div className="AllResturantPage-wrapper ">
                    {/* All Resturants  */}
                    <div className="mt-lg-4 row justify-content-between">
                          {
                            AllResturantData.map(dataObj=>(
                              <AllResturantCardMobile  key={Math.random()} {...dataObj}   className="reaturant-cart-item " ></AllResturantCardMobile>

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
