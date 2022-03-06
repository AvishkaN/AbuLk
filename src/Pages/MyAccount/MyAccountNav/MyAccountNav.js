import styled from 'styled-components';
import NavItemRow from './NavItemRow';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Avatar } from '@mui/material';

import { deepOrange, deepPurple } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';




function MyAccountNav({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MyAccountNav-wrapper">
                <div className="color-design display-flex  ">
                     <Avatar sx={{ bgcolor: deepPurple[500] }} className=" mt-auto mb-auto ms-2">  
                             <span className="letter overfloy-y-hidden">A</span> 
                     </Avatar>

                </div>

                    <div className="name-container ms-3">
                            <div className="name fw-bold ">  Aruna</div>
                            <div className="email text-color-grey font-1-1">  arunalakshan23@gmail.com</div>
                      
                    </div>

                <div className="nav-itesm-row  p-4 ">
                             {/* <NavItemRow id={"1" }  className={`    -nav-item-row   cursor-p mt-3     border-radius-20     active    ${className}`}  svgIcon={<AddCircleOutlineOutlinedIcon className='font-2-3   text-color-grey-ori    '></AddCircleOutlineOutlinedIcon>} text={"Post an Ad"}></NavItemRow> */}

                    <NavLink to="/myaccount/postAd"  activeClassName="active" className="a">
                             <NavItemRow id={"1" }  className={`    -nav-item-row   cursor-p mt-3     border-radius-20         ${className}`}  svgIcon={<AddCircleOutlineOutlinedIcon className='font-2-3   text-color-grey-ori    '></AddCircleOutlineOutlinedIcon>} text={"Post an Ad"}></NavItemRow>
                    </NavLink>

                    <NavLink to="/myaccount/myAccount" className="a">
                              <NavItemRow id={"1" }  className={`    -nav-item-row   cursor-p mt-3     border-radius-20         ${className}`}  svgIcon={<AccountCircleOutlinedIcon className='font-2-3   text-color-grey-ori    '></AccountCircleOutlinedIcon>} text={"My account"}></NavItemRow>
                    </NavLink>

                    <NavLink to="/myaccount/MyStore" className="a">
                             <NavItemRow id="00" className='-nav-item-row   cursor-p mt-3  border-radius-20'  svgIcon={<StorefrontOutlinedIcon   className='font-2-3   text-color-grey-ori         '   ></StorefrontOutlinedIcon>} text={"My Store"}></NavItemRow>
                    </NavLink>

                    <NavLink to="/myaccount/MyJobs" className="a">
                               <NavItemRow id="00" className='-nav-item-row   cursor-p mt-3   border-radius-20'  svgIcon={<WorkOutlineOutlinedIcon   className='font-2-3   text-color-grey-ori         '   ></WorkOutlineOutlinedIcon>} text={"My Jobs"}></NavItemRow>
                    </NavLink>


                    <NavLink to="/myaccount/MyBuissness" className="a">
                           <NavItemRow id="00" className='-nav-item-row   cursor-p mt-3  border-radius-20 '  svgIcon={<BusinessIcon   className='font-2-3   text-color-grey-ori         '   ></BusinessIcon>} text={"My buissness"}></NavItemRow>
                    </NavLink>

                    <NavLink to="/myaccount/MyAllAds" className="a">
                             <NavItemRow id="00" className='-nav-item-row   cursor-p mt-3   border-radius-20'  svgIcon={<BorderAllOutlinedIcon   className='font-2-3   text-color-grey-ori         '   ></BorderAllOutlinedIcon>} text={"My all ads"}></NavItemRow>
                    </NavLink>

                    <NavLink to="/myaccount/logOut" className="a">
                              <NavItemRow id="00" className='-nav-item-row   cursor-p mt-3  border-radius-20 '  svgIcon={<PowerSettingsNewIcon   className='font-2-3   text-color-grey-ori         '   ></PowerSettingsNewIcon>} text={"Log Out"}></NavItemRow>
                    </NavLink>


                </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyAccountNav */
    
    .MyAccountNav-wrapper{
      /* width: var(--MyAccountNav-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .color-design{

            background: #ee0979;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            height:10vh;  


            .letter{
                /* background: yellow;  */

            }

        }
        .active{
            
            .navitemrow{
                background: #e5e7e8;

                div,svg{
                    color:black;
                }
            }

        }


        .name-container{
            .email{ 
                margin-top: -0.5rem!important;
            }
        }

    }
`;

export default MyAccountNav;
