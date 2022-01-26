import styled from 'styled-components';
import RowItem from './RowItem';



function NavRow2({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="NavRow2-wrapper display-flex justify-content-space-around ">
                <li> <RowItem text={"Motors"}></RowItem></li>
                <li> <RowItem text={"Property for Rent"}></RowItem></li>
                <li> <RowItem text={"Propert for Sale"}></RowItem></li>

                <li> <RowItem text={"Classified"}></RowItem></li>
                <li> <RowItem text={"Furniture & Garden"}></RowItem></li>
                <li> <RowItem text={"Mobile & Tablet"}></RowItem></li>

                <li> <RowItem text={"Jobs"}></RowItem></li>
                <li> <RowItem text={"Community"}></RowItem></li>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavRow2 */
    
    .NavRow2-wrapper{
      width: var(--page-content-width);
     margin-left: auto;
     margin-right: auto; 

        li{
            list-style: none; 
        }

    }
`;

export default NavRow2;
