import { useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
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
                  <Content SingleBuissnessData={SingleBuissnessData}></Content>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleBuissness */
      background-color:#f7f7fb;


      .this-comp-blue{
        background-color:#0ab2e6;
    }
    .this-comp-green{
        background-color:#10d403;
    }


    .this-comp-grey{
        background-color: #e5e5f0;
    }

    .this-comp-green-text{
        color:#10d403;
    }
    .this-comp-red{
        background-color:#d60f02;
    }


    .this-comp-orange{
        background-color:#ff8819;
    }


    .this-comp-grey{
        background-color:#f5f5f9;
    }


    .contact-icon{
      background-color:#e5e5f0;
    }  

    .SingleBuissness-wrapper{
        width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default SingleBuissness;
