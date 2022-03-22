import styled from 'styled-components';
import Button from './../../../../Components/UI/Button/Button';



function JobDetails({className="",jobImage,jobName,jobAdress,detailsList}) {

  return (
    <DIV className={`${className} row   me-auto ms-auto w-95 border-grey border-radius-10 mb-1 pb-4  ps-5 pe-5 pt-4 `}>
       

    {/* image section */}
        <div className="col image-section text-center pe-5  pb-4  display-flex flex-direction-column align-items-center">
            <img src={jobImage} className="w-55 border-radius-circle" alt="" />
        
            <div className="highlight display-inline-block ps-3 pe-3 border-radius-5 fw-bold mt-3">{jobName}</div>

            <div className=" text-color-grey-ori font-1-3">{jobAdress}</div>

            <Button className="font-1-4 btn-outline mt-3 pt-2 pb-2 ps-4 pe-4 ">APPLY NOW</Button>
        
        </div>



    {/* details section */}
        <div className="detail-section col-md-8    ps-sm-5 ps-0 pt-4 ">

                    {
                                    detailsList.map(iconsSectionObj=>(
                                        <div  key={Math.random()}  className="display-flex align-items-center mb-3  ">

                                            {iconsSectionObj.icon}
                                            <span className='ms-2 text-color-grey-ori font-1-4 '>{iconsSectionObj.text}</span>

                                        </div>

                                    ))
                    }




        </div>
     


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only JobDetails */
    
    .highlight{
        color: #26ae61;
         background: rgba(38, 174, 97, 0.2);
    }


    .btn-outline{
        background-color:#26ae61 !important;
        color:white !important;
        border:none !important; 
        
        &:hover{

             color: #26ae61 !important; 
            background: transparent !important;
            border: 2px solid #26ae61 !important;

    }
}


    .image-section{

        @media(max-width:768px){     
            border-bottom: 1px solid #0e0e0e26;
        }
        
        img{
            @media(max-width:768px){     
                width:25% !important;   
            }
            
        }

        

    }


    .detail-section{

       

        @media(min-width:768px){      
            border-left: 1px solid #0e0e0e26;
        }

    }
 
`;

export default JobDetails;
