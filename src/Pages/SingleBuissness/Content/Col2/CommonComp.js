import styled from 'styled-components';



function CommonComp(props) {

  return (
    <DIV className={`box-shadow-normal ms-2 border-radius-20  mb-4 pb-4 ${props.className} `}>

            <div className="font-1-7 fw-bold  ps-4  border-grey-light-bottom pb-3 pt-3 mb-4">{props.Title}</div>


            <div className="">
                  {props.children}  

            </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
 
`;

export default CommonComp;
