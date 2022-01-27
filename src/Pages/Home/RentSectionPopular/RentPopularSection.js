import styled from 'styled-components';
import Card from './Card';



function RentPopularSection({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="RentPopularSection-wrapper">
         <div className="popularCategoriesRentTitle font-2-5">Popular in Residential for Rent</div>
         <div className="row grid justify-content-space-between">

        
                <div className='col-md-2 cursor-p'>
                        <Card></Card>
                </div>
                <div className='col-md-2 cursor-p'>
                        <Card></Card>
                </div>
                <div className='col-md-2 cursor-p'>
                        <Card></Card>
                </div>
                <div className='col-md-2 cursor-p'> 
                        <Card></Card>
                </div>
                <div className='col-md-2 cursor-p'>
                        <Card></Card>
                </div>

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
