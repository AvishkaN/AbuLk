import styled from 'styled-components';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import PostAd from './PostAd/PostAd';

import { useDispatch } from 'react-redux';
import { SetShowPostAdFN } from '../../Redux/slices/clickSlice';




function MyAccountComp({className=""}) {

    const dispatch=useDispatch();


    const handleClick=(e)=>{
        // console.log(e.target.closest('#post-ad-ad'));
        // console.log(e.target.closest('#1'));
        // console.log(e.target.closest('.1'));
        // console.log(e.target);
        console.log(e.target.closest('div'));

        const PostAdButton=e.target.closest('#post-ad-ad');

        if(PostAdButton){

            dispatch(SetShowPostAdFN());

        }
    }

  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="MyAccountComp-wrapper">
             <div className="row">

                 <div className="col-3">
                     <div className="my-account-nav background-aqu">
                        <MyAccountNav></MyAccountNav>
                     </div>
                 </div>

                 <div className="col-9  background-aqu">
                     <div className="my-account-content h-100"> 
                                <div className=" h-100 ">
                                
                                     <PostAd  id="post-ad" className='h-100 '></PostAd>

                                </div> 
                     </div>
                 </div>

             </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyAccountComp */
    
    .MyAccountComp-wrapper{
      /* width: var(--MyAccountComp-content-width);
        margin-left: auto;
        margin-right: auto;  */
        /* min-height: 72vh; */
        background: #F9FBFC;
        border-radius: 2% 2% 2% 0%;

        .my-account-nav{  
            border-radius: 1% 15% 15% 3%;
            background: #FFF;
            box-shadow: 0px 8px 3px 3px rgba(0 ,0 ,0,0.12);
            min-height:70vh;  

        }

        .my-account-content{
        }

    }
`;

export default MyAccountComp;
