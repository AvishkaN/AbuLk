import styled from 'styled-components';



function ContentInfo({className="",contactSection}) {

  return (
    <DIV className={`${className}`}>

            <div className="font-1-6 fw-bold  ps-4   pb-3 pt-3 mt-3">Contact Info</div>


              <div className="row ms-3 ">

              {
                  contactSection.map(concatObj=>(
                        <div className="col-11 cursor-p display-flex  align-items-center mb-2" key={Math.random()}>
                              {concatObj.svgIcon}
                              <div className="ms-2 font-1-3 ">{concatObj.text}</div>
                        </div>
                  ))
              }
              </div>




    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
 
`;

export default ContentInfo;
