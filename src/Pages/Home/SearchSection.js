import styled from 'styled-components';



function SearchSection({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SearchSection-wrapper ">
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchSection */
    
    .SearchSection-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default SearchSection;
