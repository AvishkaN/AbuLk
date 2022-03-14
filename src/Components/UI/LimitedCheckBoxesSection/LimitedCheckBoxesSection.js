import { useState } from 'react';
import styled from 'styled-components';
import CheckBoxItem from './../CheckboxItem/CheckBoxItem';
// import CheckboxItem from '../CheckboxItem/CheckBoxItem';



function LimitedCheckBoxSection({
        className="",
        title="checkBoxSection",
        titleClassName="",
        ShowTextClassName="",
       checkBoxdata=[],
       showDataCount=5,
       showtext="View more",
       hidetext="View Less",
    }) {

        const[showMore,SetShowMore]=useState(false);


        const handleClick=()=>{
            SetShowMore(!showMore);
        };

  return (
    <DIV className={`${className} Filter-row p-3    border-radius-5`}>
                    <div className={`border-grey-light-bottom pb-2  ${titleClassName}`}   >{title}</div>
             
                  

                    {
                        checkBoxdata.map((checkBoxObj,i)=>{
                            console.log(i);

                            if(!showMore) {  // display limited text
                                if(i>=showDataCount) return;
                            }
                            
                            return(
                            <CheckBoxItem  key={Math.random()}  className='mt-3 text-color-grey-light    w-95  pb-2  ms-auto me-auto border-grey-light-2-bottom '  checkmarkClassName="w-2-5rem h-2-5rem "   >
                                    <div className="display-flex ">
                                        <div className='font-1-4'>{checkBoxObj.Text}</div> 
                                        <div className='font-1-3 ms-auto'>{checkBoxObj.number}</div> 
                                    </div>
                            </CheckBoxItem>

                        )})
                    }

                 

                    <div className={`cursor-p ${ShowTextClassName} `}  onClick={handleClick}>{showMore?hidetext:showtext}</div>
             
             
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    
    
`;

export default LimitedCheckBoxSection;
