import styled from 'styled-components';



function NavItemRow({className="",svgIcon,text}) {
  return (
    <DIV className={`${className} display-flex align-items-center`}>
            {svgIcon}
            <div className="font-1-6 ms-3 text-color-grey-ori">
                {text}
            </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavItemRow */
    
    .NavItemRow-wrapper{
      /* width: var(--NavItemRow-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default NavItemRow;
