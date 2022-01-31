import styled from 'styled-components';
import SearchContainer from './SearchContainer/SearchContainer';



function PropertyPage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PropertyPage-wrapper">
                 <SearchContainer></SearchContainer>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%; 

    
    .PropertyPage-wrapper{

      width: var(--page-content-width);
      margin-left: auto;
      margin-right: auto; 

    
        
    
    }
`;

export default PropertyPage;
