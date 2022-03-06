import styled from 'styled-components';
import NavRightIconContainer from './NavRightIconContainer';
import Button from './../../UI/Button/Button';
import Link from '../../UI/Link/Link';



function NavRight({className=""}) {
  return (
    <DIV className={`${className} `}>
         <div className="NavRight-wrapper display-flex">
            <NavRightIconContainer className='w-50 nav-right-item-container'></NavRightIconContainer>

            <div className="w-50 display-flex nav-right-button-container">
               
             
                      <Link className="w-50 nav-right-button" to="/login">
                          <Button className='nav-right-button  fw-bold button-font-size text-color-white '  text={""}>Log in or sign up</Button>
                      </Link>


                      <Link to="/myaccount" className="nav-right-button w-50">
                            <Button className='  background-white fw-bold  text-color-primary h-100  button-font-size  w-100'  text={""}>Place Your Ad</Button>
                      </Link>

            </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavRight */
    
    .NavRight-wrapper{

      .button-font-size{
        font-size: 1.3rem;  
      }


    }
`;

export default NavRight;
