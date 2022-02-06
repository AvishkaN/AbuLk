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
               
                  {/* <Button className='nav-right-button  fw-bold button-font-size'  text={"Log in or sign up"}></Button> */}
             
              <Link className="w-50 nav-right-button" to="/login">
                  <Button className='nav-right-button  fw-bold button-font-size'  text={"Log in or sign up"}></Button>
              </Link>

                  <Button className='nav-right-button  background-primary fw-bold  text-color-white button-font-size  w-50'  text={"Place Your Ad"}></Button>

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
