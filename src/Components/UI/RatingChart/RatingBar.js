import styled from 'styled-components';



function RatingBar({className="",color,width}) {

  return (
    <DIV className={`${className}`}>
            <div className="">{props.children}</div>

            
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RatingBar */
    
 
`;

export default RatingBar;
