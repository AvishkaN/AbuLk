import styled from 'styled-components';
import RowItem from './RowItem';



function NavRow2({className="",NavDataLi}) {
  return (
    <DIV className={`${className}`}>
         <div className="NavRow2-wrapper display-flex justify-content-space-around ">

           {NavDataLi.map(navDataItem=>(  

             <li className='pb-4'> <RowItem text={navDataItem}></RowItem></li>
           ))

           }

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
            position: relative;
 
            &::after{
              content: "";
              height: 0px;
              position: absolute;
              bottom: 0px;
              left: 0px;
              right: 0px;
              background-color: black;
              transition: height 0.1s ease-out 0s;
            }

            &:hover:after{    
              
                  height: 5px;
            }
     
        }

    }
`;

export default NavRow2;
