import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SingleResturantNav from './SingleResturantNav/SingleResturantNav';
import Starters from './Contents/Starters/Starters';
import MainDishesh from './Contents/MainDishesh';
import Desserts from './Contents/Desserts';
import { SingleResturantData } from '../../Data/Data';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';
import { useEffect } from 'react';



function SingleResturantPage({className=""}) {

      useEffect(()=>{
        ScrollWindowTop();
      },[])



  return (
    <DIV className={`${className} pageFixed`}>
         <div className="SingleResturantPage-wrapper ">

                {/* single Resturant nav */}
                <SingleResturantNav className='mb-4 mt-2'></SingleResturantNav>
                
                <Routes>
                      <Route path="/" element={<Starters {...SingleResturantData}/>} />
                </Routes>

                <Routes>
                      <Route path="/main-dishes" element={<MainDishesh {...SingleResturantData}/>} />
                </Routes>

                <Routes>
                      <Route path="/desserts" element={<Desserts {...SingleResturantData}/>} />
                </Routes>
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleResturantPage */
    
    .SingleResturantPage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 


        .text-color-primary-this-comp{
          color:#9F978A;
        }
        .background-primary-this-comp{
          background:#9F978A;
        }

    }
`;

export default SingleResturantPage;
