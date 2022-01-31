import styled from 'styled-components';



function Button({className="",text}) {
  return (
             <ButtonComp type="button"  className={`btn ${className}`}>{text}</ButtonComp>
  );
};


const ButtonComp=styled.button`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Button */

    &:hover{
      color: var(--color-white);  
    }
    
    .Button-wrapper{


    }
`;

export default Button;
