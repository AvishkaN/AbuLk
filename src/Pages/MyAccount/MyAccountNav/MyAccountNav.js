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

                <div className=" p-4 ">

                    <NavItemRow  className={`cursor-p   border-radius-20     active    ${className}`}  svgIcon={<AccountCircleOutlinedIcon className='font-2-3   text-color-grey-ori    '></AccountCircleOutlinedIcon>} text={"My account"}></NavItemRow>
                    <NavItemRow  className='cursor-p'  svgIcon={<AddCircleOutlineOutlinedIcon   className='font-2-3   text-color-grey-ori          mt-3'   ></AddCircleOutlineOutlinedIcon>} text={"Post an Ad"}></NavItemRow>
                    <NavItemRow  className='cursor-p'  svgIcon={<StorefrontOutlinedIcon   className='font-2-3   text-color-grey-ori          mt-3'   ></StorefrontOutlinedIcon>} text={"My Store"}></NavItemRow>
                    <NavItemRow  className='cursor-p'  svgIcon={<WorkOutlineOutlinedIcon   className='font-2-3   text-color-grey-ori          mt-3'   ></WorkOutlineOutlinedIcon>} text={"My Jobs"}></NavItemRow>
                    <NavItemRow  className='cursor-p'  svgIcon={<BusinessIcon   className='font-2-3   text-color-grey-ori          mt-3'   ></BusinessIcon>} text={"My buissness"}></NavItemRow>
                    <NavItemRow  className='cursor-p'  svgIcon={<BorderAllOutlinedIcon   className='font-2-3   text-color-grey-ori          mt-3'   ></BorderAllOutlinedIcon>} text={"My all ads"}></NavItemRow>
                    <NavItemRow  className='cursor-p'  svgIcon={<PowerSettingsNewIcon   className='font-2-3   text-color-grey-ori          mt-3'   ></PowerSettingsNewIcon>} text={"Log Out"}></NavItemRow>
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
            background: #e5e7e8;
            padding-left: 0.8rem  !important;

            div,svg{
                color:black;
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
