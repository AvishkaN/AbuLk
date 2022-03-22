import styled from 'styled-components';
import Map from '../../../../Components/UI/Map/Map';
import CommonComp from '../CommonComp';



function OpeningHours({className="",bottomData,title,icon}) {

  return (
    <DIV className={`${className}`}>
                <CommonComp className="" title={title} icon={icon}>

                <Map src={bottomData} className='' height={"25rem"}></Map>



                </CommonComp>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only OpeningHours */
    
 
`;

export default OpeningHours;
