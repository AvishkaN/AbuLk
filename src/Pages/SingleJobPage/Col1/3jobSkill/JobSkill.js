import styled from 'styled-components';
import CommonComp from './../CommonComp';



function JobSkill({className="",bottomData,title}) {

  return (
    <DIV className={`${className}`}>

           <CommonComp className="" title={title}>

                    <div className="font-inherit ps-5 pe-5 pt-4">

                        {
                        bottomData.map(listItem=>(
                            <div  key={Math.random()}  className="font-inherit list-item mb-1">{listItem}</div>

                        ))
                        }

                    </div>

        </CommonComp>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only JobSkill */
    
    .list-item{
        position: relative;
        padding-left: 2.3rem;

        &:before{

            position: absolute;
            left: 0; 
            top: 1.1rem;
            width: 1.0rem;
            height: 0.2rem;
            content: "";
            background: #929292;
        }
    }

`;

export default JobSkill;
