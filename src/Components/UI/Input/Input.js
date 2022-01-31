import styled from 'styled-components';



function Input({className="",text}) {
  return (
    <DIV className={`${className}`}>
         <div className="Input-wrapper">
                <input type="text" placeholder={text}  className='input '/>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Input */
    
    .Input-wrapper{

        input{
            width: 100%; 
            background-color: var(--color-white);
        }
      /* width: var(--Input-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default Input;
