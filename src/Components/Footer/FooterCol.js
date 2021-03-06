import styled from 'styled-components';
import Link from '../UI/Link/Link';



function FooterCol({className="",title,list}) {
  return (
    <DIV className={`${className} FooterCol`}>
         <div className="FooterCol-wrapper display-flex">
                <p className='fw-bold'>{title}</p>
               
               {list.map(li=>(
                   <Link  className='footer-link font-light  ' to="/">{li}</Link>
                   
               ))}
               
               
                {/* <Link text={"About Us"} className='footer-link font-light' to="/about">About Us</Link>
                <Link text={"About Us"} className='footer-link font-light' to="/about">About Us</Link>
                <Link text={"About Us"} className='footer-link font-light' to="/about">About Us</Link> */}
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FooterCol */
    
    .FooterCol-wrapper{
      /* width: var(--FooterCol-content-width);
        margin-left: auto;
        margin-right: auto;  */
        flex-direction: column; 

        .footer-link{
            color: #0C5582;  

            &:hover{
                text-decoration: underline;  
            }
        }

    }
`;

export default FooterCol;
