import styled from 'styled-components';
import RealedPostItem from './RealedPostItem';



function RealedPost({className="",relatedPosts}) {

  return (
    <DIV className={`${className}`}>

        <div className="font-1-7 fw-bold  ms-4 mt-4">Related Posts</div>

        <div className="row mt-4 ms-2">

                        {
                                relatedPosts.map(relatedPostObj=>(
                                    <RealedPostItem  key={Math.random()}  className="col-md-5 col-sm-8  col-11 box-shadow-normal ms-md-4 ms-auto mb-4 border-radius-5 p-0 cursor-p me-auto"  {...relatedPostObj}></RealedPostItem>
                                ))
                            }
        </div>

            
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RealedPost */
    
 
`;

export default RealedPost;
