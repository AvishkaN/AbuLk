import styled from 'styled-components';



function Input(props) {
  return (
         <InputComp ref={props.ref} type={props.type}  className={` input ${props.className} `}   border={props.border}>
                 {props.children}  
        </InputComp>

  );
}



const InputComp=styled.input`
    width: 100%;
    border:${props => props.border? `1px solid black`:`none`};


`;

export default Input;
