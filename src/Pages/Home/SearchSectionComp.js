import styled from 'styled-components';
import SearchSection from './SearchSection';



function SeachSectionComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SeachSectionComp-wrapper pt-4">
                <div className="title-row">
                    <h2 className='text-center text-color-white'>
                             The best place to  <span  className='fw-bold'>buy </span> your house, <span  className='fw-bold'>sell</span> your car or  <span className='fw-bold'></span>  <span className='fw-bold'>find</span>  a job in Al Ain.
                    </h2>
                </div>
                <div className="filter-row">
                    <SearchSection></SearchSection>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SeachSectionComp */
    
    background-image: linear-gradient(to right bottom, rgba(126,213,111,0), rgba(40,180,133,0)),url('https://dbzstatic-a.akamaihd.net/dist_957ce2f4cf/images/hero-image/hero_image_7.jpg');
    min-height: 50vh;
    background-size: cover; 
    background-repeat: no-repeat; 

    .SeachSectionComp-wrapper{
        width: 85%; 
        margin-left: auto;
        margin-right: auto; 
        background:red; 

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
