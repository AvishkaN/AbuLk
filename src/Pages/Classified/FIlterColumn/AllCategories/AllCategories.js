import styled from 'styled-components';
import Categorie from './Categorie';



import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';

import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import SchoolIcon from '@mui/icons-material/School';





function AllCategories({className=""}) {
  return (
    <DIV className={`${className} mt-4`}>

        <div className="font-1-4">Category</div>
         <div className="AllCategories-wrapper mt-3">


            <Categorie   className='mt-2'  text="Electronics" number="(1278)"  svgIcon={ <PhoneAndroidIcon className="font-2-5   text-color-primary  w-10 text-color-primary"></PhoneAndroidIcon> }></Categorie>
            <Categorie   className='mt-2'  text="Jobs" number="(1278)"  svgIcon={<WorkOutlineIcon className="font-2-5   text-color-primary   w-10"></WorkOutlineIcon>}></Categorie>
            <Categorie   className='mt-2'  text="Home & Garden" number="(1278)"  svgIcon={<HomeOutlinedIcon className="font-2-5   text-color-primary   w-10"></HomeOutlinedIcon>}></Categorie>
            <Categorie   className='mt-2'  text="Jobs" number="(1278)"  svgIcon={<WatchOutlinedIcon className="font-2-5   text-color-primary   w-10"></WatchOutlinedIcon>}></Categorie>
         
            <Categorie   className='mt-2'  text="Property" number="(1278)"  svgIcon={<DirectionsCarFilledOutlinedIcon className="font-2-5   text-color-primary   w-10"></DirectionsCarFilledOutlinedIcon>}></Categorie>
            <Categorie   className='mt-2'  text="Education" number="(1278)"  svgIcon={<SchoolIcon className="font-2-5   text-color-primary   w-10"></SchoolIcon>}></Categorie>

            <Categorie   className='mt-2'  text="Home & Garden" number="(1278)"  svgIcon={<HomeOutlinedIcon className="font-2-5   text-color-primary   w-10"></HomeOutlinedIcon>}></Categorie>
            <Categorie   className='mt-2'  text="Jobs" number="(1278)"  svgIcon={<WatchOutlinedIcon className="font-2-5   text-color-primary   w-10"></WatchOutlinedIcon>}></Categorie>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AllCategories */
    
    .AllCategories-wrapper{
      /* width: var(--AllCategories-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default AllCategories;
