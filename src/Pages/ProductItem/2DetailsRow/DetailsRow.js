import styled from 'styled-components';
import PropertFirstDescription from './PropertyFirstDescription/PropertFirstDescription';
import Description from '../1SliderRow/Description/Description';
import Ameties from './Amenties/Ameties';
import PropertyInfo from './PropertInfo/PropertyInfo';
import Map from './../Map/Map';
import Form from '../Form/Form';




const AmetiesList=["Maids Room","Central A/C & Heating","Maid Service","Built in Kitchen Appliances"];


function DetailsRow({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="DetailsRow-wrapper">
            <PropertFirstDescription className='mt-6'></PropertFirstDescription>
            <Description className='mt-6'></Description>
            <Ameties  list={AmetiesList} className='mt-6'></Ameties>
            <PropertyInfo  className='mt-6'></PropertyInfo>
            <Map  className='mt-6 cusor-p'></Map>
            <Form  className='mt-6 '></Form>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only DetailsRow */
    /* background: red;  */
    
    .DetailsRow-wrapper{
      /* width: var(--DetailsRow-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .mt-6{   
          margin-top: 4.5rem!important;
        }   

    }
`;

export default DetailsRow;
