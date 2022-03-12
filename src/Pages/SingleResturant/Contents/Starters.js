import styled from 'styled-components';



function StarterPage({
  className="",
  resturantName,
  resturantBannerImg,
  resturantBannerText,
  AllRecipes,

}) {
  return (
    <DIV className={`${className} row`} resturantBannerImg={resturantBannerImg}>
            {/* Image */}
            <div className="col-12 image display-flex">
                <div className="w-95 m-auto display-flex ">
                      
                      {/* left txt */}
                      <div className="">
                          <div className="text-color-white font-1-3 text-transform-uppercase fw-bold mt-0-5-">{resturantBannerText.line1}</div>
                          <div className="text-color-white font-3 text-transform-capitalize fw-bold mt-0-5-">{resturantBannerText.line2}</div>
                          <div className="text-color-white font-2 mt-0-5- text-transform-capitalize  Dancing-script-font-family">{resturantBannerText.line3}</div>
                      </div>
               
               
                      {/* right text - resturant Name*/}
                        {/* <div className="text-left  ms-auto w-20">
                          <div className="font-4 Colonna-font-family text-color-white"> {resturantName}</div>
                        </div> */}
                          <div className="font-4 Colonna-font-family text-color-white text-left  ms-auto w-15"> 
                                {/* <div className="">//Monday//</div> */}
                                {resturantName}
                                {/* <div className="">//5PM till 9PM//</div> */}
                          </div>
                </div>


            </div>

            {/* All recipes */}
            <div className="col-12"></div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .image{
      min-height: 27rem; 
      /* background:${props => props.resturantBannerImg}; */


      background-image: linear-gradient(to right bottom, rgba(0,0,0,0.44), rgba(0,0,0,0.44)),url(${props => props.resturantBannerImg});
      background-size: cover;
      background-position: 48% 47%;
      border-radius: 10px; 
      /* background-position: top; */
      /* background-repeat: no-repeat;  */
      


         
    /* background-image:  url(${props => props.resturantBannerImg}); */
    
    /* min-height: 40vh;
    background-size: cover; 
    position: relative; */

    }

 
`;

export default StarterPage;
