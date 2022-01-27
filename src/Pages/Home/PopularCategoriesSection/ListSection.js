import styled from 'styled-components';
import ListColumn from './ListColumn';



function ListSection({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ListSection-wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <ListColumn></ListColumn>
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ListSection */
    
    .ListSection-wrapper{
      /* width: var(--ListSection-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default ListSection;
