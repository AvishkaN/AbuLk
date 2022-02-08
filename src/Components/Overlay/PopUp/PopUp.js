import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';



function LinkComp(props) {
  return (


  <DIV className={`${props.className}  border-radius-5  background-white mt-5`}>
    <div className="PopUp-wrapper ">

                <div className="close-btn text-right">
                        <CloseIcon className='font-2-6 me-3 mt-3'></CloseIcon>
                </div>

                <div className="pop-up-content p-4">
                      {props.children}  

                </div>

    </div>
  </DIV>

  );
}

const DIV=styled.div`

  width: 65%;
    margin-right: auto; 
    margin-left: auto;
    
    .PopUp-wrapper{

    }
`;



export default LinkComp;
