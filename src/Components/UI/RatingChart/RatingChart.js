import styled from 'styled-components';
import RatingBar from './RatingBar';
import StarIcon from '@mui/icons-material/Star';



function RatingChart({className="",RatingsAndReviews}) {

  return (
    <DIV className={`${className}`}>

            {/*   5 Star*/}
          



            {
                RatingsAndReviews.map(ratingobj=>(
                                <div className="mb-4" key={Math.random()}>
                                        

                                <div className="this-comp-grey display-inline ps-2  border-radius-5">
                                    <span className="font-1-4"> {ratingobj.rateComp}</span>
                                    <StarIcon className='pb-1 font-1-7'></StarIcon>
                                </div>


                                <RatingBar 
                                    className='border-radius-10  mb-1 ms-1 mt-2'
                                    color={ratingobj.color}
                                    width={ratingobj.ratingBarWidth}
                                    barContent={ratingobj.barContent}
                                    minHeigh={"1.75rem"}
                            ></RatingBar>

                                </div>
                ))
            }
    
   
    

       


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RatingChart */

    .font-size-0703{ 
        font-size:0.703125rem;
    }
    
 
`;

export default RatingChart;
