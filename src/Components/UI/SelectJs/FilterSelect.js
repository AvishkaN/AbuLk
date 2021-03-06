import styled from 'styled-components';
import DropDownList from './../DropDownList/DropDownList';
import FilterSelectTitle from './FilterSelectTitle';
import { useState } from 'react';



function FilterSelect({className="",
                                        border=false,
                                        DropDownclassName,
                                        selectedColor="",
                                        filterList,
                                        filterDefaultSelectedText,
                                        ShowListProp,
                                        filterSelectTitleClassName,
                                        selectedNameClassName,
                                        classNameListItemClassName}) {

    const [showList,setShowList]=useState(false);
    const [selectedName,setSelectedName]=useState(filterDefaultSelectedText);



    const ShowListFN=(e)=>{

        setShowList(!showList);

        const IsCustomLinkSelected=e.target.closest('.custom-list-item');

        if(IsCustomLinkSelected){

            const selectedText=e.target.closest('.custom-list-item').innerText;
            setSelectedName(selectedText);   

        }


    }

  return (
    <DIV selectedColor={selectedColor}  className={`${className}`} IsShowList={showList} onClick={ShowListProp? ShowListProp:ShowListFN} border={border}>
         <div className="FilterSelect-wrapper " >

         <FilterSelectTitle showList={showList}  selectedNameClassName={`${filterSelectTitleClassName}`}  className="ps-2 pe-2 "  selectedName={selectedName}></FilterSelectTitle>

            {
                showList && ( 

                 <DropDownList className={DropDownclassName}  
                                selectedColor={selectedColor}  
                                selectedName={selectedName}  
                                filterList={filterList}
                                
                                
                                selectedNameClassName={selectedNameClassName}
                                classNameListItemClassName={classNameListItemClassName}
                                
                                ></DropDownList>
                )
            }
             


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FilterSelect */
    border:${props => props.border? `1px solid black`:`none`};

    
    .FilterSelect-wrapper{

        .selected-name{
            background: var(--color-white);

            .arrow-icon{   
                transform:  ${props => props.IsShowList? 'rotate(180deg)': 'rotate(0deg)'};
                transition: all .3s;    
            }
        }
        



    }
`;

export default FilterSelect;
