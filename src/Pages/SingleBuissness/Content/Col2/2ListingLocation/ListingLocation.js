import styled from 'styled-components';
import Map from '../../../../../Components/UI/Map/Map';
import Button from '../../../../../Components/UI/Button/ButtonOutline';

import MapIcon from '@mui/icons-material/MapOutlined';



function ListingLocartion({className="",location}) {

  return (
    <DIV className={`${className}`}>

        {/* map */}
        <Map className='map'></Map>

        

        {/* map location text */}

          <div className=" display-flex  align-items-center mt-3 border-grey-light-bottom pb-4" >
                <MapIcon className='contact-icon  border-radius-circle p-2 font-2-9 '></MapIcon>
                <div className="ms-2 font-1-3 fw-bold">{location}</div>
          </div>


        {/* button */}



        <Button className="display-flex justify-content-center  ms-2 pt-2 pb-2  align-items-center text-color-white this-comp-orange font-1-3 mt-4 border-radius-5">
                  Get Direction
        </Button>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ListingLocartion */
    .map{
        display: flex;
        min-height: 20rem;
    }
 
`;

export default ListingLocartion;
