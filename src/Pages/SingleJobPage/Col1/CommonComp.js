import styled from 'styled-components';



function CommonComp(props) {

  return (
    <DIV className={`${props.className} box-shadow-normal me-auto ms-auto w-95 border-grey-light-2-bottom border-grey-light-2-left border-grey-light-2-right border-radius-10 mb-1 pb-4 `}>
       
        <div className="title   text-color-white fw-bold font-2  ps-5 pt-3 pb-3 ">
            {props.title}
        </div>

        

        <div className="bottom font-1-4 ">
            {props.children}  

        </div>


    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only CommoComp */
    
    .title{
        background-color:#424242;

        /* border-top-left-radius: 5px; 
        border-top-right-radius: 5px; */
    }


    .bottom{ 
        color:#7e8791;
    }
 
`;

export default CommonComp;
