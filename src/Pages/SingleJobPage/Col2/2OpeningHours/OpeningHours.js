import styled from 'styled-components';
import CommonComp from '../CommonComp';



function OpeningHours({className="",bottomData,title,icon}) {

  return (
    <DIV className={`${className}`}>
                <CommonComp className="" title={title} icon={icon}>


        {
                    bottomData.map(list=>(
                        <div  key={Math.random()}  className=" mb-3  row border-grey-light-2-bottom pb-1 mb-4">

                            <span className='ms-2 col'>{list.text}</span>
                            <span className='ms-2 col-4 time-sec col-lg-5 col-xxl-4 '>{list.time}</span>

                        </div>

                    ))
        }
                </CommonComp>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only OpeningHours */
   
    .time-sec{
      
      @media(max-width:361px){     
        width: 39.333333%;
      }


    }
 
`;

export default OpeningHours;
