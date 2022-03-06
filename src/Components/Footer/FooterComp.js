import styled from 'styled-components';
import FooterCol from './FooterCol';



function FooterComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="FooterComp-wrapper">
                <div className="row gy-5">
                    <div className="col-6 col-md-2">
                            <FooterCol title={"Company"} list={["About Us ","Advertising","Careers","Terms of Use","Privacy Policy"]}></FooterCol>
                    </div>
                    <div className="col-6 col-md-2">
                            <FooterCol title={"UAE"} list={["Dubai ","Abu Dhabi","Ras al Khaimah","Sharjah","Fujairah","Ajman","Umm al Quwain","Al Ain"]}></FooterCol>
                    </div>
                    <div className="col-6 col-md-2">
                            <FooterCol title={"Other Countries"} list={["Egypt ","Bahrain","Saudi Arabia","Lebanon","Kuwait","Oman","Qatar","Pakistan"]}></FooterCol>
                    </div>


                    <div className="col-6 col-md-2">
                            <FooterCol title={"Get Social"} list={["Dubai ","Abu Dhabi","Ras al Khaimah","Sharjah","Fujairah","Ajman","Umm al Quwain","Al Ain"]}></FooterCol>
                    </div>
                    <div className="col-6 col-md-2">
                            <FooterCol title={"Support"} list={["Dubai ","Abu Dhabi","Ras al Khaimah","Sharjah","Fujairah","Ajman","Umm al Quwain","Al Ain"]}></FooterCol>
                    </div>
                    <div className="col-6 col-md-2">
                            <FooterCol title={"Languages"} list={["Dubai ","Abu Dhabi","Ras al Khaimah","Sharjah","Fujairah","Ajman","Umm al Quwain","Al Ain"]}></FooterCol>
                    </div>
                </div>
                <div className="copyright-text mt-5 text-center text-color-grey">
                        ©Blue Line Web Solutions 2022, All Rights Reserved.
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FooterComp */
    
    .FooterComp-wrapper{
      /* width: var(--FooterComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default FooterComp;
