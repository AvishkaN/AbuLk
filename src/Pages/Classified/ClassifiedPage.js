import { useEffect } from 'react';
import styled from 'styled-components';
import ClassifiedComp from './ClassifiedComp';



function ClassfiedPage({className=""}) {

  useEffect(()=>{
    console.log(`🤜🤜🤜`);

    // scroll to top
    window.scroll(0, 0);

  },[]);

  return (
    <DIV className={`${className}`}>
         <div className="ClassfiedPage-wrapper">
                <ClassifiedComp></ClassifiedComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassfiedPage */
    margin-top: 12rem;   
    
    .ClassfiedPage-wrapper{   
        /* width: var(--page-content-width); */
        
        width: 94%;
        margin-left: auto;
        margin-right: auto; 
        /* background: yellow;  */


        @media(max-width:600px){
          width: 100%;  
        }

    }
`;

export default ClassfiedPage;
