import styled from 'styled-components';
import CommonComp from './../CommonComp';



function JobDescription({className="",bottomData,title}) {

  return (
    <DIV className={`${className}`}>

        <CommonComp className="" title={title}>

                <div className="font-inherit ps-5 pe-5 pt-4">
                       {bottomData}
                </div>

        </CommonComp>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only JobDescription */
    
 
`;

export default JobDescription;
