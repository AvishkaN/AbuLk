import { Link } from 'react-router-dom';
import styled from 'styled-components';



function NavRow2({className="",text}) {
  return (

    <DIV>
            <Link to="/" className='link fw-bold'>
                {text}
            </Link>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .link{
        text-decoration:none;   
    }

    
`;

export default NavRow2;
