import { CarRepairTwoTone } from '@mui/icons-material';
import styled from 'styled-components';
import Card from './Card';



function RentPopularSection({className="",title,data}) {
  return (
    <DIV className={`${className}`}>
         <div className="RentPopularSection-wrapper">
         <div className="popularCategoriesRentTitle font-2-5">{title}</div>
         <div className="row grid justify-content-space-between mt-4">

             {
                 data.map(carditem=>(
                    <div className='col-lg-2   col-sm-6 cursor-p'>
                             <Card key={Math.random}  nameTag={carditem.nameTag} list={['5 Beds','5 Baths']}  imgSrc={carditem.imgSrc}  nameOrYear={"Al jimi"}></Card>
                    </div>
                 ))
             }

{/*         
<div className='col-md-2   col-sm-6 cursor-p'>
        <Card  nameTag={"AED 7500"} list={['5 Beds','5 Baths']}  imgSrc={"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InZ6cDczYTZ3b3ExMDEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.Zy-2-01WxmW2EO4LHNi-vdrvCUbjMR2kYzpDVy5fsOQ/image;p=main"}  nameOrYear={"Al jimi"}></Card>
</div>
<div className='col-md-2   col-sm-6 cursor-p'>
        <Card  nameTag={"AED 7500"} list={['5 Beds','5 Baths']}  imgSrc={"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InM0cTNvMWt4MDl1MS1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjAsInAiOiJjZW50ZXIsMSIsImEiOjEwMH1dfQ.uwDeOT6f0NXfjzQD9VpPtCdGXgQw5JH-sc0tiqscWhc/image;p=main"}  nameOrYear={"Al jimi"}></Card>
</div>
<div className='col-md-2   col-sm-6 cursor-p'>
        <Card  nameTag={"AED 7500"} list={['5 Beds','5 Baths']}  imgSrc={"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Ink3bzcxcmFhc2s0LURVQklaWkxFIiwidyI6W3siZm4iOiI1amV1aTdxZnppZTYxLURVQklaWkxFIiwicyI6MCwicCI6ImNlbnRlciwxIiwiYSI6MTAwfV19.3bMIfwvBO3rRrcWF9zdVvX5jA8U1byIQgga_nWN1uDo/image;p=main"}  nameOrYear={"Al jimi"}></Card>
</div>
<div className='col-md-2   col-sm-6 cursor-p'>
        <Card  nameTag={"AED 7500"} list={['5 Beds','5 Baths']}  imgSrc={"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Im12ZjhlNWUzOGhxcTItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.NRIhRXwmAoV8ZLK7JU0uSwVXV1vr7SUWwJusmqMAVEg/image;p=main"}  nameOrYear={"Al jimi"}></Card>
</div>
<div className='col-md-2  col-sm-6  cursor-p'> 
        <Card  nameTag={"AED 7500"} list={['5 Beds','5 Baths']}  imgSrc={"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InVpdDlsMTl4Y3J3MDItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.VTv3YSgCTYbOGlPzMZTUfYDsUG3I23a7-hB7vHcoNUY/image;p=main"}  nameOrYear={"Al jimi"}></Card>
</div> */}


         </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RentPopularSection */
    
    .RentPopularSection-wrapper{
      /* width: var(--RentPopularSection-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .col-md-2{
            @media(min-width:768px){ 
                width: 19.5% !important;    
            }
        }

    }
`;

export default RentPopularSection;
