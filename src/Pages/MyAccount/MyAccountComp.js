import styled from 'styled-components';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import PostAd from './PostAd/PostAd';



function MyAccountComp({className=""}) {
  return (
    <DIV className={`${className}`}>
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
                                
                                     <PostAd className='h-100 '></PostAd>

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
        background: #F9FBFC;

        .my-account-nav{  
            border-radius: 2% 20% 0% 0%;
            background: #FFF;
            box-shadow: 0px 8px 3px 3px rgba(0 ,0 ,0,0.12);
        }

        .my-account-content{
        }

    }
`;

export default MyAccountComp;
