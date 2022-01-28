import styled from 'styled-components';
import FooterComp from './FooterComp';




function Footer({className=""}) {
  return (
    <DIV className={`${className} pt-5 pb-4`}>
         <div className="Footer-wrapper pt-3">
                <FooterComp></FooterComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Footer */
    background-color: var(--color-grey-2);
    
    .Footer-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default Footer;
