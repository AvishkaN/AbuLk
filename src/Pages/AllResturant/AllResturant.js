import styled from 'styled-components';
import {AllResturantData} from '../../Data/Data';
import { useDispatch } from 'react-redux';
import ResturantCardItem from './AllResturantCard';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';
import AllResturantCardMobile from './Mobile/AllResturantCardMobile';
import ScreenWidthCalc from '../../Functions/DOM/CalcScreenWidth';
import { useEffect } from 'react';



function AllResturantPage({className=""}) {

  const dispatch=useDispatch();

  useEffect(()=>{
    ScrollWindowTop();
  },[])



  return (
    <DIV className={`${className} pageFixed`} >
         <div className="AllResturantPage-wrapper ">
                    {/* All Resturants  */}
                    <div className="mt-lg-4 row justify-content-between">

                      {
                        (ScreenWidthCalc() >= 991) &&  AllResturantData.map(dataObj=>(
                          <ResturantCardItem  key={Math.random()} {...dataObj}   className="reaturant-cart-item " ></ResturantCardItem>

                        ))
                      }


                          {/* Mobile */}
                          {
                            (ScreenWidthCalc() <= 991) && AllResturantData.map(dataObj=>(
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
