import styled from 'styled-components';
import Car from '@mui/icons-material/DirectionsCarFilledOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function Li({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Li-wrapper">
                <h3 className="list-title display-flex align-item-center fw-bold"> 
                      <span> <Car className='font-2 color-primary text-color-primary '></Car> </span>     
                       <span className='font-size-inherit ms-1'>Motors</span>  
                      <span className='ms-3 overfloy-y-hidden text-color-grey'>(154)</span>
                 </h3>

                <div className="fw-light">Used Cars for Sale</div>
                <div className="">Used Cars for Sale</div>
                <div className="">Used Cars for Sale</div>
                <div className="">Used Cars for Sale</div>
                <div className="">Used Cars for Sale</div>

                <div className="arrow-row display-flex align-items-center text-color-primary cursor-p">
                        All in Motors  <ArrowForwardIcon className='ms-2 arrow-icon'></ArrowForwardIcon>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Li */
    
    .Li-wrapper{
      /* width: var(--Li-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .arrow-row{

          .arrow-icon{
            transition: all .2s;
          }

          &:hover .arrow-icon{
            margin-left: 1rem!important; 
          }
        }

    }
`;

export default Li;
