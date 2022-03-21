import styled from 'styled-components';
import CommonComp from './../CommonComp';



function Location({className="",bottomData,title,icon}) {

  return (
    <DIV className={`${className}`}>


        <CommonComp className="" title={title} icon={icon}>


            {
                        bottomData.map(iconsSectionObj=>(
                            <div  key={Math.random()}  className="display-flex align-items-center mb-3  ">

                                {iconsSectionObj.icon}
                                <span className='ms-2'>{iconsSectionObj.text}</span>

                            </div>

                        ))
            }
        </CommonComp>



    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Location */
    
 
`;

export default Location;
