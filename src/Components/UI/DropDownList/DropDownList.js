import styled from 'styled-components';



function DropDownList({className="",filterList=[]}) {
  return (
    <DIV className={`${className}`}>
           <div className="custom-list mt-1  border-radius-5 ">  
                        <div>        
                            {
                                filterList.map(list=>(
                                    <div className='cursor-p custom-list-item p-2 font-1-3'>{list}</div>

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
            height: 30vh;
            
            .custom-list-item{
                background: var(--color-white); 
                    &:hover{
                        background: var(--color-grey-2);  
                    }
            }
        }
 
`;

export default DropDownList;
