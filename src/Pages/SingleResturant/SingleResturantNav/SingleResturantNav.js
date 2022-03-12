import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



function SingleResturantNav({className=""}) {
  return (
    <DIV className={`${className} text-center`}>
              <NavLink  to={`/single-resturant/`}   activeClassName="active  "   className="a  fw-bold font-1-4  text-transform-uppercase ps-2 pe-2 me-2"> starters</NavLink>
              <NavLink  to={`/single-resturant/main-dishes`}      className="a  fw-bold font-1-4  text-transform-uppercase ps-2 pe-2 me-2"> main dishes</NavLink>
              <NavLink  to={`/single-resturant/desserts`}      className="a  fw-bold font-1-4  text-transform-uppercase ps-2 pe-2"> desserts</NavLink>

         
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleResturantNav */
    
        .active{
            color:#978668;
            border-bottom: 2px solid #978668;
            transition:all .2s;
    }
    
`;

export default SingleResturantNav;
