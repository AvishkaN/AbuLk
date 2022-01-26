import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Select from '../Select/Select';
import NavRight from '../Nav/NavRight/NavRight';
import Row2 from '../Nav/Row2/Row2';



function NavBar({className=""}) {
  return (
    <DIV className={`${className} pt-2`}>
         <div className="NavBar-wrapper">
             
             <div className="row-1 border-bottom pb-2">
                    <div className="row justify-content-space-between align-item-center">
                            <div className="left col-md-4 ">
                                    <Logo className='w-30'></Logo>
                                    <Select className='w-25 cursor-p ms-3'></Select>
                            </div>
                            <div className="right col-md-7">
                                <NavRight></NavRight>
                            </div>
                    </div>
             </div>

             <div className="row-2 border-bottom pt-4 pb-4">
                            <Row2></Row2> 
             </div>
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavBar */
    /* position: fixed; */

    /* &:after{
        content: '';
        width: 100%;
        height: 200px;
        background: #f44336;
        display: block;
        transition: 0.45s;
    } */


    
    .NavBar-wrapper{
        
        .row-1{
            .row{
                width: var(--page-content-width);
                margin-left: auto;
                margin-right: auto; 
                .left{
                display: flex;
                align-items: flex-end; 
                /* background-color: green;  */
                
            }
            .right{

            }}
        }

    }
`;

export default NavBar;
