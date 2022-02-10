import styled from 'styled-components';
import PopUp from './../PopUp/PopUp';
import Input from './../../UI/Input/Input';
import FilterSelect from './../../UI/SelectJs/FilterSelect';



function PostAdPop({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PostAdPop-wrapper">
                <PopUp>

                    <div className="mt-4 post-ad-">
                        
                            <label htmlFor="">Post Title</label>
                            <Input border={true} className="p-1"></Input>



                            
                            <div className="dropdown">

                            <label htmlFor="">Category</label>
                            <FilterSelect 
                                        className={"p-3"}
                                        DropDownListItemclassName={"p-2"}
                                        selectedColor={"var(--color-grey-2)"}
                                        filterList={["MobilePhone","Tv","Radio"]}
                                        filterDefaultSelectedText={"MobilePhone"}
                                        ShowListProp={false}
                                        border={true}

                            ></FilterSelect>
                            
                            </div>


                            <div className="dropdown mt-3">

                            <label htmlFor="">Ad Type </label>
                            <FilterSelect 
                                        className={"p-3"}
                                        DropDownListItemclassName={"p-2"}
                                        selectedColor={"var(--color-grey-2)"}
                                        filterList={["Classified","Tv","Radio"]}
                                        filterDefaultSelectedText={"Classified"}
                                        ShowListProp={false}
                                        border={true}

                            ></FilterSelect>

                            </div>

                    </div>



                </PopUp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PostAdPop */
    
    .PostAdPop-wrapper{
        
        .post-ad-{
            width: 60%;
              margin-left: auto;
              margin-right: auto; 

        }

    }
`;

export default PostAdPop;
