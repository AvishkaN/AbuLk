import styled from 'styled-components';
import Table from '../../../../../Components/UI/Table/Table';

let timings=[
    {
        td:<div className="ps-3  font-1-3 pt-2 pb-2">Monday</div>,
        tr:<div className="fw-bold ps-2 font-1-3 pt-2 pb-2">9.00am-9.00pm</div>,
    },

    {
        td:<div className="ps-3  font-1-3 pt-2 pb-2">TuesDay</div>,
        tr:<div className="fw-bold ps-2 font-1-3 pt-2 pb-2">9.00am-9.00pm</div>,
    },
    {
        td:<div className="ps-3  font-1-3 pt-2 pb-2">Wednesday</div>,
        tr:<div className="fw-bold ps-2 font-1-3 pt-2 pb-2">9.00am-9.00pm</div>,
    },
    {
        td:<div className="ps-3  font-1-3 pt-2 pb-2">Friday</div>,
        tr:<div className="fw-bold ps-2 font-1-3 pt-2 pb-2">9.00am-9.00pm</div>,
    },
    {
        td:<div className="ps-3  font-1-3 pt-2 pb-2">Saturday</div>,
        tr:<div className="fw-bold ps-2 font-1-3 pt-2 pb-2">9.00am-9.00pm</div>,
    },

    
    

];




function Timing({className=""}) {

  return (
    <DIV className={`${className} ps-5 pt-4 pe-5`}>
               <Table className=""  tableData={timings}  borderColor="#cbbfbf" ></Table>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
 
`;

export default Timing;
