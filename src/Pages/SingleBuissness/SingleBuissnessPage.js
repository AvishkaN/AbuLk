import { useEffect } from 'react';
import Header from './Header/Header';
import {SingleBuissnessData} from './../../Data/Data';
import styled from 'styled-components';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';





function SingleBuissness({className=""}) {

  useEffect(()=>{
    
    //Scroll To Top
    ScrollWindowTop();
  },[])


  return (
    <DIV className={`${className}pageFixed`}>
      
        {/* Header */}
          <Header SingleBuissnessData={SingleBuissnessData}></Header>
         
         
         <div className="SingleBuissness-wrapper ">
                <h1>Single Buissness  </h1>


                {/* Content */}


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleBuissness */
    
    .SingleBuissness-wrapper{
        width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default SingleBuissness;
