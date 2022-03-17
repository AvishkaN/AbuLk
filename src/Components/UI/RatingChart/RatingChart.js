import styled from 'styled-components';
import RatingBar from './RatingBar';
import StarIcon from '@mui/icons-material/Star';



function RatingChart({className=""}) {

  return (
    <DIV className={`${className}`}>

            {/*   5 Star*/}
            <div className="mb-3">
                            

                                <div className="this-comp-grey display-inline ps-2  border-radius-5">
                                    <span className="font-1-4"> 5</span>
                                    <StarIcon className='pb-1 font-1-7'></StarIcon>
                                </div>


                                <RatingBar 
                                    className='border-radius-10  mb-1 ms-1 mt-2'
                                    color="#10d403"
                                    width={"100%"}
                                    barContent={<div className='bar-content text-color-white fw-bold  font-1-2 '>1953</div>}
                                    minHeigh={"1.75rem"}
                            ></RatingBar>

            </div>



            {/*   4 Star*/}
            <div className="mb-3">
                            

                                <div className="this-comp-grey display-inline ps-2  border-radius-5">
                                    <span className="font-1-4"> 5</span>
                                    <StarIcon className='pb-1 font-1-7'></StarIcon>
                                </div>


                                <RatingBar 
                                    className='border-radius-10  mb-1 ms-1 mt-2'
                                    color="#0ab2e6 "
                                    width={"80%"}
                                    barContent={<div className='bar-content text-color-white fw-bold  font-1-2 '>1953</div>}
                                    minHeigh={"1.75rem"}
                            ></RatingBar>

            </div>



            {/*   3 Star*/}
            <div className="mb-3">
                            

                                <div className="this-comp-grey display-inline ps-2  border-radius-5">
                                    <span className="font-1-4"> 5</span>
                                    <StarIcon className='pb-1 font-1-7'></StarIcon>
                                </div>


                                <RatingBar 
                                    className='border-radius-10  mb-1 ms-1 mt-2'
                                    color="#ff8819"
                                    width={"20%"}
                                    barContent={<div className='bar-content text-color-white fw-bold  font-1-2 '>1953</div>}
                                    minHeigh={"1.75rem"}
                            ></RatingBar>

            </div>


            {/*   2 Star*/}
            <div className="mb-3">
                            

                                <div className="this-comp-grey display-inline ps-2  border-radius-5">
                                    <span className="font-1-4"> 5</span>
                                    <StarIcon className='pb-1 font-1-7'></StarIcon>
                                </div>


                                <RatingBar 
                                    className='border-radius-10  mb-1 ms-1 mt-2'
                                    color="red"
                                    width={"20%"}
                                    barContent={<div className='bar-content text-color-white fw-bold  font-1-2 '>1953</div>}
                                    minHeigh={"1.75rem"}
                            ></RatingBar>

            </div>


            {/*   1 Star*/}
            <div className="mb-3">
                            

                                <div className="this-comp-grey display-inline ps-2  border-radius-5">
                                    <span className="font-1-4"> 5</span>
                                    <StarIcon className='pb-1 font-1-7'></StarIcon>
                                </div>


                                <RatingBar 
                                    className='border-radius-10  mb-1 ms-1 mt-2'
                                    color="red"
                                    width={"20%"}
                                    barContent={<div className='bar-content text-color-white fw-bold  font-1-2 '>1953</div>}
                                    minHeigh={"1.75rem"}
                            ></RatingBar>

            </div>

    
   
    

       


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
