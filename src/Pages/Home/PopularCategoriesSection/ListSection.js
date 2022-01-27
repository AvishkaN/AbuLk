import styled from 'styled-components';
import ListColumn from './ListColumn';



function ListSection({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ListSection-wrapper">
                <div className="row justify-content-space-between">
                    <div className="col-md-2">
                        <ListColumn title={"Motors"} number={154}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Motors"} number={154}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Motors"} number={154}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Motors"} number={154}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Motors"} number={154}></ListColumn>
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
