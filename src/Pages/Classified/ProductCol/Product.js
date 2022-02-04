import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';



function Product({className="",image,name,location,price,member=true,verifiedSeller=true}) {
  return (
    <DIV className={`${className}`}>
         <div className="Product-wrapper">
                <div className="row">
                    <div className="col-lg-3 col-3">
                        <img className='w-100' src={image} alt="" />
                    </div>
                    <div className="col-lg-9 col-9">
                        <div className="title">{name}</div>
                        <div className="signs display-flex">
                            <div className="member w-15 border-radius-5 text-center text-color-white font-1-3">{member && ('member')}</div>
                                    
                                    
                            {verifiedSeller && (  
                                    <div className="verfied-Seller display-flex align-item-center font-1-4">
                                            <VerifiedUserIcon className='verfiy-icon font-1-4 ms-2'></VerifiedUserIcon>
                                           <div className="">verifiedSeller</div>
                                     </div>
                            )
                                
                            }


                                        
                        </div>
                        <div className="location ">{location}</div>
                        <div className="price text-color-primary fw-bold font-1-5">{price}</div>
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Product */
    
    .Product-wrapper{
      /* width: var(--Product-content-width);
        margin-left: auto;
        margin-right: auto;  */


        .row{
            /* @media (min-width: 992px){
                flex-direction: column;  
            } */
        }

        .title{
            @media (max-width: 396px){
                    font-size:1.3rem;
            }
        }

        .location{
            color: #afb7ad;     
        }

        .member{
            background: #afb7ad;  

            @media (max-width: 615px){
                    /* font-size:1.1rem;    */
                    width: 20% !important;     
            }
            @media (max-width: 450px){
                    /* font-size:1.1rem;    */
                    width: 25% !important;     
            }
            @media (max-width: 377px){
                    /* font-size:1.1rem;    */
                    width: 30% !important;     
            }
        }

        .verfied-Seller{
                color: #0074ba;   

                .verfiy-icon{

                }
        }

    }
`;

export default Product;
