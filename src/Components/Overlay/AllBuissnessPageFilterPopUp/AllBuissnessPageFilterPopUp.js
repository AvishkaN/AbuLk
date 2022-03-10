import styled from 'styled-components';

import PopUp from '../PopUp/PopUp';
import Filter from '../../../Pages/AllBuissness/Filter/Filter';
import Button from '../../UI/Button/Button';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';




function LocationPopUp({className=""}) {
  const dispatch=useDispatch();

  const handleCLick=()=>{
    dispatch(ShowHideAllFN())
  };



  return (
    <DIV className={`${className} row`}>
           <PopUp to="/">

               <div className="display-flex ">
                            <h2 className='fw-bold'>Filter Result</h2>
                </div>


                    <div className="col-11 background-yello ">

                            <Filter></Filter>
                            <div className="text-right mt-4">
                                    <Button onClick={handleCLick} text={" "} className='background-primary text-color-white  font-1-5 border-radius-20 ps-4 ps-4'>Filter Now</Button> 
                            </div>

                        
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
