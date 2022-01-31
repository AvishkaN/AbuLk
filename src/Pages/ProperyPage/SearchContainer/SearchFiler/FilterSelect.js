import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';



function FilterSelect({className="",filterSectionTitle,filterList,filterDefaultSelectedText}) {

    const [showList,setShowList]=useState(false);
    const [selectedName,setSelectedName]=useState(filterDefaultSelectedText);



    const ShowList=(e)=>{

        setShowList(!showList);
        // console.log(e.target);   
        console.log(e.target.closest('.custom-list-item')?.innerText);   

        const IsCustomLinkSelected=e.target.closest('.custom-list-item');

        if(IsCustomLinkSelected){

            const selectedText=e.target.closest('.custom-list-item').innerText;
            setSelectedName(selectedText);   

        }


    }

  return (
    <DIV className={`${className}`} IsShowList={showList} onClick={ShowList}>
         <div className="FilterSelect-wrapper " >


            <div className="selected-name cursor-p p-3 border-radius-5 display-flex justify-content-space-between align-item-center" >
               <div className="font-1-3">{selectedName}</div>        
               <KeyboardArrowDownIcon className='arrow-icon'></KeyboardArrowDownIcon>
            </div>

            {
                showList && (

                    <div className="custom-list mt-1  border-radius-5 ">  
                        <div>        
                            {
                                filterList.map(list=>(
                                    <div className='cursor-p custom-list-item p-2 font-1-3'>{list}</div>

                                ))
                            }

                        </div>
                    </div>
                )
            }
             


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FilterSelect */
    
    .FilterSelect-wrapper{

        .selected-name{
            background: var(--color-white);

            .arrow-icon{   
                transform:  ${props => props.IsShowList? 'rotate(180deg)': 'rotate(0deg)'};
                transition: all .3s;    
            }
        }
        


        .custom-list{           
            height: 30vh;
            
            .custom-list-item{
                background: var(--color-white); 
                    &:hover{
                        background: var(--color-grey-2);  
                    }
            }
        }

    }
`;

export default FilterSelect;
