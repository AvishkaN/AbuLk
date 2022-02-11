import styled from 'styled-components';
import SearchSectionNav from './SearchSectionNav';
import Input from '../../../Components/UI/Input/Input';
import Button from '../../../Components/UI/Button/Button';



function SearchSection({className=""}) {
  return (
    <DIV className={`${className} p-4`}>
         <div className="SearchSection-wrapper ">
               <div className="search-section-row-1">
                    <SearchSectionNav></SearchSectionNav>
               </div>
               <div className="search-section-row-2 mt-4">
                    <div className="row">
                        <div className="col-sm-10">

                                <Input placeholder={"Search for anything.."}  type="text" className='input p-3 background-white' border={true} ></Input>

                        </div>
                        <div className="col-sm-2">

                            <Button text={" "} className='background-primary text-color-white w-100 h-100 text-1-3 font-1-4'>Search</Button> 

                        </div> 
                    </div>

               </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchSection */
    background:rgba(33,34,35,.6); 
    border-radius: 10px;  

    
    .SearchSection-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }

    .input{


      .Input-wrapper{
        .input{
          padding: 1.5rem!important;

        }
      }
        
    }
`;

export default SearchSection;
