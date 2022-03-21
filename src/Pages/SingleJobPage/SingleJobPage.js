import styled from 'styled-components';
import { useEffect } from 'react';


import Header from './Header/Header';
import Col1 from './Col1/Col1';
import Col2 from './Col2/Col2';

import { SingleJobPageData } from '../../Data/Data';


import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';





function SingleJobPage({className=""}) {

  useEffect(()=>{
    
    //Scroll To Top
    ScrollWindowTop();
  },[])


  return (
    <DIV className={`${className} pageFixed `}>
        {/* Header */}
        <Header className=''></Header>



         <div className="SingleJobPage-wrapper">

                <div className="row">


                    {/* Col-1 */}
                    <Col1 className='col-8 '  Col1Data={SingleJobPageData.Col1Data}></Col1>

                    {/* Col-2 */}
                    <Col2 className='col-4 background-yello '  Col2Data={SingleJobPageData.Col2Data}></Col2>

                </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleJobPage */

    .this-comp-green{
        background:#26ae61
    }
    
    .this-comp-green-text{
        color:#26ae61
    }



    .SingleJobPage-wrapper{
         width: 90%;
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default SingleJobPage;
