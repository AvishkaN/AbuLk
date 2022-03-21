import styled from 'styled-components';



function ScrollIndicator({className="",width="50%",color="#10d403"}) {

    // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - 		   
  
//    document.documentElement.clientHeight;
  
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

  return (
    <DIV className={`${className} pageFixed`}  width={width} color={color}>
            <div className="scroll-bar  h-100">
                    {/* &nbsp; */}
            </div>
    </DIV>
  );
}


const DIV=styled.div`
       width: 100%;
    height: 0.4rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999; 

    margin-top: 10rem;  
    
    @media (max-width: 1000px){
        margin-top: 6.2rem;
    }  

    
    @media (max-width: 600px){
        /* top:auto;  
        bottom:0; 
        margin-bottom: 5rem; */
    }  

    .scroll-bar{

        width:${props => props.width};

        background-color:${props => props.color};
        transition:all .01s; 


    }
 
`;

export default ScrollIndicator;
