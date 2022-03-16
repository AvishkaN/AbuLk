import styled from 'styled-components';



function Ratings({className=""}) {

  return (
    <DIV className={`${className} `}>
                        <div className="font-1-7 fw-bold  ps-3  border-grey-light-bottom pb-3 ">rating and reviews</div>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Ratings */
    
 
`;

export default Ratings;
