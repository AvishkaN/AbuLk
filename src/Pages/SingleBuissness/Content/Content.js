import styled from 'styled-components';
import Col1 from '../Content/Col1/Col1';
import Col2 from '../Content/Col2/Col2';





function Content({className="",SingleBuissnessData}) {



  return (
    <DIV className={`${className} row`}>

        {/* COL-1 */}
            <Col1   className='col-8    ' SingleBuissnessData={SingleBuissnessData}></Col1>            

        {/* COL-2*/}
            <Col2 className='col-4    border-radius-20 p-3'  SingleBuissnessData={SingleBuissnessData}></Col2>            

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
     
`;

export default Content;
