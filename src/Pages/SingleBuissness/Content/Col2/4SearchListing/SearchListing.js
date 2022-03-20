import styled from 'styled-components';
import Input from '../../../../../Components/UI/Input/Input';
import FilterSelect from '../../../../../Components/UI/SelectJs/FilterSelect';

import Button from '../../../../../Components/UI/Button/Button';




function SearchListing({className="",searchList}) {

  return (
    <DIV className={`${className} ps-3 pe-3 ps-xl-5 pe-xl-5`}>

        {/* Search */}
         <Input className="border-grey p-2 font-1-4 text-transform-initial"  placeholder="What are you looking for ?"></Input>
  
        {/* select category drop down */}
         <FilterSelect 
                selectedColor="#80808021" 
                filterSectionTitle={"Price Range"}
                filterList={searchList} 
                filterDefaultSelectedText={"Select Category"} 
                
                
                selectedNameClassName=" font-1-4 text-color-grey-light pt-2 pb-2" 
                className='filter-select mt-3 border-grey  border-radius-5'  
                DropDownclassName=" font-1-5  "
                classNameListItemClassName={"font-1-4 pt-2 pb-2 ps-2 "} >


        </FilterSelect>


        {/*  search button*/}
        <Button className="display-flex justify-content-center   pt-2 pb-2  align-items-center text-color-white this-comp-orange font-1-4 mt-4 border-radius-5 w-100">
                  Search
        </Button>

  
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchListing */
    
 
`;

export default SearchListing;
