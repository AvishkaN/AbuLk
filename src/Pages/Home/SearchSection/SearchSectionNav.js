import styled from 'styled-components';
import LinkComp from '../../../Components/UI/Link/Link';
import Li from './Li';



function SearchSectionNav({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SearchSectionNav-wrapper text-color-white">
                <div className="row align-item-center">
                    <div className="col-sm-2"><span className='fw-bold'>Searching In</span></div>
                    <div className="col-sm-10">
                        <div className='navlist display-flex align-item-center'>
                            <Li text={"All"} className={'active'}></Li>
                            <Li text={"Motors"} className={' '}></Li>
                            <Li text={"Classifieds"} className={' '}></Li>

                            <LinkComp to="/properties">{"Property for Sale"}</LinkComp>

                            <Li text={"Property for Rent"} className={''}></Li> 
                            <Li text={"Jobs"} className={''}></Li>

                            <Li text={"Community"} className={''}></Li>


                        </div>
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchSectionNav */
    
    .SearchSectionNav-wrapper{
      /* width: var(--SearchSectionNav-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .navlist{ 
            li{
            list-style: none; 

        }

        .active{
            background: red;
            border-radius: 44%;
        }
    }

    }
`;

export default SearchSectionNav;
