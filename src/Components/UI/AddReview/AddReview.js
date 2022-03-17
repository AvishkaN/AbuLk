import styled from 'styled-components';
import Input from '../../../Components/UI/Input/Input';
import Button from '../../../Components/UI/Button/Button';



function AdReviewSection({className=""}) {

  return (
    <DIV className={`${className}`}>

            {/* star section */}

            {/* Name */}
                <div className="ps-1 font-1-4">Your Name</div>
                <Input className="background-transparent border-grey-light border-radius-5  pt-2  pb-2 ps-3 mt-2 mb-4" placeholder={""}></Input>
            
            {/* Email */}
                <div className="ps-1 font-1-4">Your Email</div>
                <Input className="background-transparent border-grey-light border-radius-5  pt-2  pb-2 ps-3 mt-2 mb-4" placeholder={""}></Input>
         
            {/* Review Text */}
            <textarea  className='textarea border-radius-5 p-2 w-100  h-15rem ' id="review-from" name="review-from" rows="4" cols="50" placeholder='write  review '></textarea>


            {/* Submit  */}

            <Button className="this-comp-red text-color-white  font-1-5 mt-4 ps-4 pe-4">submit</Button>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AdReviewSection */
    
 
`;

export default AdReviewSection;
