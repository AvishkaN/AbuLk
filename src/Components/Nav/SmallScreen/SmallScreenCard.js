import styled from 'styled-components';



function SmallScreenCard({className="",svgIcon,text,secondtext}) {
  return (
    <DIV className={`${className} `}> 
         <div className="SmallScreenCard-wrapper text-center">
             {svgIcon}
            <div className="first-text fw-bold font-1-2  ">{text}</div>
            <div className="font-1 second-text fw-bold  ">{secondtext?secondtext:(<div className='font-1 second-text fw-bold opacity-0'>opacity</div>)}</div> 
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* box-shadow: 0 2px 8px 0 rgba(0 ,0 ,0,0.4); */

    box-shadow: -2px 2px 8px 0 rgba(0,0,0,0.04);
    border-radius:10px; 
    
    min-height: 11vh;     

    &:hover{  
        background-color: #eef0f1;
        border-radius: 12px;
    }

    /* margin-top: var(--margin-top-fix-nav);  */  /*only SmallScreenCard */
    /* border: 2px solid #000;  */
    
    .SmallScreenCard-wrapper{
      /* width: var(--SmallScreenCard-content-width);
        margin-left: auto;
        margin-right: auto;  */
        /* padding: 2rem  5rem;    */

        .first-text{
            
        }
        .second-text{
            margin-top: -0.5rem;   

        }

    }
`;

export default SmallScreenCard;
