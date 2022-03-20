import styled from 'styled-components';
import RealedPostItem from '../../Col1/3RealedtPosts/RealedPostItem';



function RecentBuissnessPost({className="",recentPost}) {

  return (
    <DIV className={` ps-3 pe-3 ps-xl-5 pe-xl-5 ${className}`}>

        <RealedPostItem    
            className="col-lg-12 col-md-8  col-11 ms-auto me-auto border-grey border-radius-5  cursor-p "  
            {...recentPost} ></RealedPostItem>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RecentBuissnessPost */
    
 
`;

export default RecentBuissnessPost;
