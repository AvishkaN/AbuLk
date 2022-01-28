import styled from 'styled-components';
import SearchSection from './SearchSection';
import SrilankaImg from './../../../assets/img/sriLanka.jpg';



function SeachSectionComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SeachSectionComp-wrapper pt-4 mt-5 pb-5">
                <div className="title-row">
                    <h2 className='text-center text-color-white'>
                             The best place to  <span  className='fw-bold'>buy </span> your house, <span  className='fw-bold'>sell</span> your car or  <span className='fw-bold'></span>  <span className='fw-bold'>find</span>  a job in Al Ain.
                    </h2>
                </div>
                <div className="filter-row mt-4">
                    <SearchSection></SearchSection>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SeachSectionComp */
    
    /* background-image: linear-gradient(to right bottom, rgba(126,213,111,0), rgba(40,180,133,0)),url('https://dbzstatic-a.akamaihd.net/dist_957ce2f4cf/images/hero-image/hero_image_7.jpg'); */
    
    /* background-image:linear-gradient(to right bottom, rgba(126,213,111,0), rgba(40,180,133,0)), url(${SrilankaImg}); */
    
    background-image:  url(${SrilankaImg});
    
    min-height: 40vh;
    background-size: cover; 
    background-repeat: no-repeat; 
    border-radius: 10px; 
    background-position: 10% 27%;
    position: relative;


    &:before {
        background: rgba(0, 0, 0, 0.1);
        /* rgb(2 1 1 / 11%); */
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .SeachSectionComp-wrapper{
        width: 85%; 
        margin-left: auto;
        margin-right: auto; 

        .title-row{
            /* h2{
               font-size :inherit ; 
            } */
            span{
                font-size:inherit;
            }
        }

    }
`;

export default SeachSectionComp;
