import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Select from '../UI/Select/Select';
import NavRight from '../Nav/NavRight/NavRight';
import Row2 from '../Nav/Row2/Row2';
import SmallScreen from '../Nav/SmallScreen/SmallScreen';
import MobielNavBar from '../Nav/MobileNavBar/MobielNavBar';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShowMobileNavFN } from '../../Redux/slices/clickSlice';

import { useLocation } from "react-router-dom"

const data=['Motors','Property for Rent','Propert for Sale','Classified','Furniture & Garden','Mobile & Tablet','Jobs','Community'];



function NavBar({className=""}) {

    const dispatch=useDispatch();
    const location = useLocation();


    const handleCLick=(e)=>{
        if(e.target.closest('.mobile-nav-icon')){
            dispatch(ShowMobileNavFN());
        }
    };


  return (
    <DIV className={`${className}  pb-3 `} onClick={handleCLick} LocationPath={location.pathname}>
         <div className="NavBar-wrapper">

             
             <div className="row-1 border-bottom pb-3 pt-2 w-100  background-primary">  
                    <div className="row justify-content-space-between align-item-center">
                            <div className="left col-3  col-xl-4">
                                <Link to="/" className='w-100 a'>
                                    {/* <Logo className='w-100'></Logo> */}
                                    <h2 className='w-100 fw-bold  text-color-white text-center  text-logo '>ABU.LK</h2>

                                </Link>
                                    {/* <Select className='select w-25 cursor-p ms-3'></Select> */}
                            </div>
                            <div className="right col-9 col-xl-8"> 
                                <NavRight></NavRight>
                            </div>

                            <MenuIcon className='mobile-nav-icon text-color-white'></MenuIcon>
                    </div>
             </div>


             <div className="row-2 border-bottom pt-4  w-100 background-primary">
                            <Row2 LocationPath={location.pathname} NavDataLi={data}></Row2> 
             </div>


          {location.pathname=='/' &&(   <div className="row-2-small-screen">
                  <SmallScreen></SmallScreen>
             </div>)}

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
  
    
    .text-logo{
        /* background-color:yellow;  */

        @media(min-width:1000px){     
            text-align: left!important;
        }
    }

    
    .NavBar-wrapper{
        
        .row-1{
            position: fixed;  
            /* background: var(--color-white); */
            z-index:100; 
            .row{
                width: ${props => (props.LocationPath=='/classified')?'var(--page-content-width)':'var(--Nav-content-width)' };
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
                    @media(max-width:1273px){
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
                /* color: var(--color-primary); */
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
            /* background: var(--color-white); */
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
