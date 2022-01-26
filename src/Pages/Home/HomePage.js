import styled from 'styled-components';
import SearchSectionComp from './SearchSectionComp';



function HomePage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="HomePage-wrapper">
         <SearchSectionComp className='mt-5'></SearchSectionComp>

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
