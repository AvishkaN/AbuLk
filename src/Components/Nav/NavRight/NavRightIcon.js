import styled from 'styled-components';


function Icon({className="",text,Icon}) {
  return (
    <DIV className={`${className}`}>
         <div className="Icon-wrapper display-flex">
                        <Icon className="nav-right-icon"></Icon>
                        <span className='font-1-3'>{text}</span>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Icon */
    
    .Icon-wrapper{
        flex-direction: column;
        align-items: center; 
        
        &:hover .nav-right-icon{
            color: var(--color-black);
        }
        &:hover span{
            color: var(--color-black);
        }

        .nav-right-icon{
        }

        span{

        }

    }
`;

export default Icon;
