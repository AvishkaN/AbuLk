import styled from 'styled-components';
import RatingChart from '../../../../../Components/UI/RatingChart/RatingChart';



function Ratings({className="",RatingsAndReviews}) {

  return (
    <DIV className={`${className} `}>
                        <div className="font-1-7 fw-bold  ps-3  border-grey-light-bottom pb-3 mb-4">rating and reviews</div>

                        <RatingChart  RatingsAndReviews={RatingsAndReviews} className=''></RatingChart>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Ratings */
    
 
`;

export default Ratings;
