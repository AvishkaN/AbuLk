import styled from 'styled-components';
import PropertFirstDescription from './PropertyFirstDescription/PropertFirstDescription';
import Description from './Description/Description';


function DetailsRow({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="DetailsRow-wrapper">
            <PropertFirstDescription className='mt-5'></PropertFirstDescription>
            <Description className='mt-5'></Description>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only DetailsRow */
    /* background: red;  */
    
    .DetailsRow-wrapper{
      /* width: var(--DetailsRow-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default DetailsRow;
