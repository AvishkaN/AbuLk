import styled from 'styled-components';
import MyAccountComp from './MyAccountComp';



function MyAccoutPage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MyAccoutPage-wrapper mt-5">
                <MyAccountComp ></MyAccountComp>
         </div>
    </DIV>
  );
}

// my account
// post an ad
// my store
// my jobs
// my business
// My all ads
// log out


const DIV=styled.div`
    width: 100%;
    margin-top:10rem;
    /* background: green;  */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyAccoutPage */
    background: #D5DAE6;
    
    .MyAccoutPage-wrapper{
        /* background: yellow;  */
        /* width: var(--page-content-width); */
        width: 70%;

        margin-left: auto;
        margin-right: auto; 

    }
`;

export default MyAccoutPage;
