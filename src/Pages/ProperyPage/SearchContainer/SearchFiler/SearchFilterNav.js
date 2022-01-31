import styled from 'styled-components';



function SearchFilterNav({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SearchFilterNav-wrapper">
                <div className="row justify-content-center">      
                    <div className="col-8 display-flex  nav-container font-1">
                        <div className="filter-nav  background-white pt-3 pb-3 pe-2 ps-2  cursor-p filter-nav-active ">Residential for Sale</div>
                        <div className="filter-nav  background-white pt-3 pb-3 pe-2 ps-2 cursor-p ">Commercial for Sale</div>
                        <div className="filter-nav  background-white pt-3 pb-3 pe-2 ps-2 cursor-p ">Land for Sale</div>
                        <div className="filter-nav  background-white pt-3 pb-3 pe-2 ps-2 cursor-p ">Multiple Units for Sale</div>
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchFilterNav */
    
    .SearchFilterNav-wrapper{
      /* width: var(--SearchFilterNav-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .row{
            .nav-container{
                /* background: yellow;   */

                .filter-nav{
                    border-radius: 5px; 

                }

                .filter-nav-active{
                    background: var(--color-black);
                    color: var(--color-white);
                }
            }
        }

    }
`;

export default SearchFilterNav;
