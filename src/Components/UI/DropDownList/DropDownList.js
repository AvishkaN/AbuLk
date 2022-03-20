import styled from 'styled-components';



function DropDownList({className="",filterList=[],selectedName,selectedColor,classNameListItemClassName,DropDownclassName}) {
  return (
    <DIV  selectedColor={selectedColor} className={` ${className}`}>


           <div className="custom-list mt-1  border-radius-5 ">  
                        <div>        
                            {
                                filterList.map(list=>(
                                    <div   className={`cursor-p custom-list-item      ${(list ==selectedName) && 'active-link'}  ${classNameListItemClassName} `}>{list}</div>

                                ))
                            }

                        </div>
                    </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;


    
    .custom-list{           
            /* height: 30vh; */
            
            .custom-list-item{
                background: var(--color-white); 
                    &:hover{
                        background: var(--color-grey-2);  
                    }
            }
        }

        .active-link{
                /* background: #80808021 !important;   */
                background: ${props => props.selectedColor } !important;  
        }
 
`;

export default DropDownList;
