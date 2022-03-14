import styled from 'styled-components';
import Button from '../../Components/UI/Button/Button';


function JobItemCard({
    className="",
    personImg,
    personName,
    job,
    location,
    price,
    priceDuration,
    Description,
 
}) {
  return (
    <DIV className={` ${className} ms-2 me-2 mb-5 mt-1 ps-4 pe-4 pt-3 pb-3`}>

        <div className="row align-items-center">
            
                    {/* Image */}
                    <div className="col-1 p-0">
                        <img src={personImg} alt=""  className='w-100'/>
                    </div>

                    {/* Details */}
                    <div className="col  display-flex align-items-center">

                        <div className="left">
                                {/*  Name*/}
                                <div className="this-comp-blue fw-bold">{personName}</div>
                                {/* Job  */}
                                <div className="this-comp-blue-2 font-1-3">{job}</div>
                                {/*Mobile  */}
                                <div className="">{location}</div>
                        </div>


                        {/* price -Dekstop */}
                        <div className="price ms-auto font-2 display-sm-none">
                            <span className='this-comp-green fw-bold  font-inherit '>{price}</span>  <span className='text-color-grey-ori  font-inherit'>/ {priceDuration}</span>
                        </div>
                        
                        {/* View More Button  Dekstop*/}
                        <Button className="fw-bold font-1-4 view-more-btn transiiton-default btn-outline ms-auto ps-5 pe-5 display-md-none">View Profile</Button>

                    </div>

        </div>



            {/* price - Mobile*/}
            <div className="price ms-auto font-1-6 mt-3 mb-2">
                <span className='this-comp-green fw-bold  font-inherit'>{price}</span>  <span className='text-color-grey-ori  font-inherit'>/ {priceDuration}</span>
            </div>

        {/* View More Button -Mobile */}
        <Button className="fw-bold font-1-4 view-more-btn transiiton-default btn-outline ms-auto ps-5 pe-5 display-md-none-min ">View Profile</Button>




        {/* Descripton */} 
        <div className="col-12 Roboto-font-family limit-text-line-2 pt-1">
            {Description}
        </div>
       
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */

    .image{
        width:12%;
    }


    .price{
        @media(max-width:469px){     
            font-size: 1.6rem !important;
        }
    }

    .col-1{
        @media(max-width:628px){     
            width: 13%;
        }

        @media(max-width:461px){     
            width: 16%;
        }
    }

   
   
    
   
`;

export default JobItemCard;
