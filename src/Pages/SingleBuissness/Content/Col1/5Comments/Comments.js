import styled from 'styled-components';
import Comment from '../../../../../Components/UI/Comment/Comment';



function Comments({className="",comments}) {

  return (
    <DIV className={`${className}`}>

            {
                        comments.map(commentObj=>(
                            <Comment  key={Math.random()}  {...commentObj} className="mb-3 pb-3 border-grey-light-2-bottom "></Comment>

                        ))
            }

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Comments */
    
 
`;

export default Comments;
