import styled from 'styled-components';
import SearchSectionComp from '././SearchSection/SearchSectionComp';
import PopularSection from '././PopularCategoriesSection/PopularSection';



function HomePage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="HomePage-wrapper">
         <SearchSectionComp className='mt-5'></SearchSectionComp>
         <PopularSection></PopularSection>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: var(--margin-top-fix-nav);   /*only HomePage */
    
    .HomePage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default HomePage;
