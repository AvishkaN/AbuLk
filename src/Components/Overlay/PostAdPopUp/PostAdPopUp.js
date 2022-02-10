import styled from 'styled-components';
import PopUp from './../PopUp/PopUp';
import Input from './../../UI/Input/Input';



function PostAdPop({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PostAdPop-wrapper">
                <PopUp>
                    
                    <Input></Input>

                </PopUp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PostAdPop */
    
    .PostAdPop-wrapper{
      /* width: var(--PostAdPop-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PostAdPop;
