import styled from 'styled-components';

import PopUp from '../PopUp/PopUp';
import Filter from '../../../Pages/AllBuissness/Filter/Filter';




function LocationPopUp({className=""}) {



  return (
    <DIV className={`${className} row`}>
           <PopUp to="/">
                    <h1>Filter Result</h1>

                    <div className="col-11 background-yello ">

                            <Filter></Filter>
                        
                    </div>


              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LocationPopUp */
    

`;

export default LocationPopUp;
