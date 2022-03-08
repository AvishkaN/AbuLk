import styled from 'styled-components';



function AllBuissnessPage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="AllBuissnessPage-wrapper">
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AllBuissnessPage */
    
    .AllBuissnessPage-wrapper{
      /* width: var(--AllBuissnessPage-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default AllBuissnessPage;
