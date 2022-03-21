import styled from 'styled-components';
import ArrowIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const backgroundImg ="http://utouchdesign.com/themes/envato/escort/assets/img/single_page_header.png";


function Header({className=""}) {

  return (
    <DIV className={`${className} `}>


        <div className="display-flex flex-direction-column align-item-center justify-content-center h-100 text-color-white  ">

                {/* <div className="font-2-3 fw-bold">Job Details</div> */}
                <div className="font-3-1 fw-bold">Job Details</div>

                <div className="">
                    <span className='' >Home</span>
                    <span className='ms-1'> 
                            <ArrowIcon className='font-2'></ArrowIcon>    
                     </span>
                    <span className='ms-1' >Job Details</span>
                </div>

        </div>

        
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Header */
    
    background-image: linear-gradient(to right bottom, rgba(0,0,0, 0.56), rgba(0,0,0, 0.56)),url(${backgroundImg});

    height: 200px;
    background-size: cover;
    background-position: 4% 64%;
 
`;

export default Header;
