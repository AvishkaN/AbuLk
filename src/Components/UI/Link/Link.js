import { Link } from 'react-router-dom';
import styled from 'styled-components';



function LinkComp({className="",to="/",text=""}) {
  return (
      <div className="">
            <Link to={to} className={`${className} a`}>
                    {text}
            </Link>
      </div>
  );
}



export default LinkComp;
