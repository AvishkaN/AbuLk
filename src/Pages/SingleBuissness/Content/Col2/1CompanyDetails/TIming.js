import styled from 'styled-components';
import Table from '../../../../../Components/UI/Table/Table';




function Timing({className=""}) {

  return (
    <DIV className={`${className}`}>
               <Table></Table>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
 
`;

export default Timing;
