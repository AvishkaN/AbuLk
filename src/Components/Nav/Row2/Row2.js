import styled from 'styled-components';
import RowItem from './RowItem';



function NavRow2({className="",NavDataLi,LocationPath='/'}) {
  return (
    <DIV className={`${className}`} LocationPath={LocationPath}>
         <div className="NavRow2-wrapper display-flex  justify-content-between ">

           {NavDataLi.map(navDataItem=>(  

             <li className='pb-4 text-color-white'> <RowItem text={navDataItem}></RowItem></li>
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
      width: ${props => (props.LocationPath=='/classified')?'80%':'var(--Nav-content-width)' };
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
              background-color: var(--color-white);
              transition: height 0.1s ease-out 0s;
            }

            &:hover:after{    
              
                  height: 5px;
            }
     
        }

    }
`;

export default NavRow2;
