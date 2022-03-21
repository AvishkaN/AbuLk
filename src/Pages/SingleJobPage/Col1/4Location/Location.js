import styled from 'styled-components';
import CommonComp from './../CommonComp';
import Map from './../../../../Components/UI/Map/Map';



function Location({className="",bottomData,title}) {

  return (
    <DIV className={`${className}`}>
       
       <CommonComp className="" title={title}>

            <div className="font-inherit ps-5 pe-5 pt-4 map">
                    <Map src={bottomData} className='' height={"25rem"}></Map>
            </div>

        </CommonComp>



    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Location */
    .map{
       
    }
 
`;

export default Location;
