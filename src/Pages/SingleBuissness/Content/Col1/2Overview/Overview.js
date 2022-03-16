import styled from 'styled-components';



function OverView({
          className="",
          text,
          contactSection,
          moreBuissnessInfo,
          buissnessId,
          postedDate,
        
        }) {

  return (
    <DIV className={`${className}`}>
        {/* Description  */}
        <div className="">
              <div className="font-1-7 fw-bold border-bottom pb-3 pt-2 ps-2">Overview</div>
              
              <div className="font-1-4">

                {text}

              </div>

        </div>


        {/* Contact Section  */}
        <div className="">
              <div className="font-1-7  mt-4 fw-bold border-bottom pb-2 pt-2 ps-2">Contact Info</div>
           
                  {/* contact info list */}

                  <div className="row">

                      {
                          contactSection.map(concatObj=>(
                                <div className="col-6 gy-2 cursor-p display-flex  align-items-center" key={Math.random()}>
                                      {concatObj.svgIcon}
                                      <div className="ms-2 font-1-4">{concatObj.text}</div>
                                </div>
                          ))
                      }
                  </div>

        </div>




        {/* More Buissness Info  */}
        <div className="">
              <div className="font-1-7  mt-4 fw-bold border-bottom pb-2 pt-2 ps-2">More Buissnes Info</div>
           
                  {/* more info list */}

                  <div className="mt-3">

                      {
                          moreBuissnessInfo.map(moreInfObj=>(
                            <div className='row mt-4'>
                              <div className="col-4 fw-bold font-1-5">{moreInfObj.text}</div>
                              <div className="col font-1-4">{moreInfObj.info}</div>
                            </div>
                          ))
                      }
                  </div>

        </div>


        {/* Bottom  line */}
        <div className="mt-5 display-flex align-items-center border-grey-light-top border-grey-light-bottom pt-2 pb-2 ps-3">
                      <div className="font-1-3">Buissness ID :  {buissnessId}</div>
                      <div className="font-1-3 ms-auto">Posted By {postedDate}</div>
        </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only OverView */

    .contact-icon{
      background-color:#e5e5f0;
    }
    
 
`;

export default OverView;
