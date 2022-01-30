import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Select from '../Select/Select';
import NavRight from '../Nav/NavRight/NavRight';
import Row2 from '../Nav/Row2/Row2';
import SmallScreen from '../Nav/SmallScreen/SmallScreen';
import MobielNavBar from '../Nav/MobileNavBar/MobielNavBar';

import MenuIcon from '@mui/icons-material/Menu';

const data=['Motors','Property for Rent','Propert for Sale','Classified','Furniture & Garden','Mobile & Tablet','Jobs','Community'];



function NavBar({className=""}) {
  return (
    <DIV className={`${className}  pb-3 `}>
         <div className="NavBar-wrapper">
             
             <div className="row-1 border-bottom pb-3 pt-2 w-100 ">  
                    <div className="row justify-content-space-between align-item-center">
                            <div className="left col-3  col-xl-4">
                                    <Logo className='w-30'></Logo>
                                    <Select className='select w-25 cursor-p ms-3'></Select>
                            </div>
                            <div className="right col-8 col-xl-7"> 
                                <NavRight></NavRight>
                            </div>

                            <MenuIcon className='mobile-nav-icon'></MenuIcon>
                    </div>
             </div>


             <div className="row-2 border-bottom pt-4  w-100">
                            <Row2 NavDataLi={data}></Row2> 
             </div>


             <div className="row-2-small-screen">
                  <SmallScreen></SmallScreen>
             </div>

             {/* <div className="mobile-nabar">
                    <MobielNavBar></MobielNavBar>
             </div> */}
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background: var(--color-white);
  
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
            position: fixed;  
            background: var(--color-white);
            z-index:100; 
            .row{
                width: var(--page-content-width);
                margin-left: auto;
                margin-right: auto; 
                .left{
                display: flex;
                align-items: flex-end; 
                /* background-color: green;  */

                @media(max-width:1000px){
                    width: 90%;   
                    justify-content: center
                }
                
                .select{
                    @media(max-width:1000px){
                        display: none;  
                        
                    }

                }
                
            }
            .right{

                @media(max-width:1000px){
                    display: none;  

                }

            }

            .mobile-nav-icon{ 
                color: var(--color-primary);
                font-size: 5rem;  
                display: none;
                
                @media(max-width:1000px){
                    display: flex; 
                    width: 10%;

                }
            }
        }
        }

        .row-2{
            margin-top: 5rem; 
            background: var(--color-white);
            z-index:100; 
            @media(max-width:1000px){
                display:none; 
            }

            position: fixed; 
        }
        .row-2-small-screen{
            display: none;
            @media(max-width:1000px){
                display:flex;   
                margin-top: 11rem;  
            }
        }

    }
`;

export default NavBar;
