import styled from 'styled-components';



function Card({className="",img,nameTag,name,country,list}) {
  return (
    <DIV className={`${className}`}>
         <div className="Card-wrapper p-3">
                <img className='w-100 item-image' src={"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImZubXk5cGoxOGZtdzEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.U7h38RL8Cnr9BhcM3E4JVVbZ-4UMLuUCzBh_gPr04nc/image;p=main"} alt="" />
                <div className="details">
                   <div className="nametag text-color-primary fw-bold">AED 32,00</div>
                   <div className="name display-flex ">
                            <li className='w-50'>3 Beds</li>   
                            <li className='w-50'>5 Beds</li>     

                     </div> 
                   <div className="country-name text-color-grey">Al jimi</div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Card */

    &:hover{
        /* background-color: red;  */
        /* box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px !important;  */
        
    }
    
    .Card-wrapper{
        /* box-shadow: 5px 5px 15px 5px #000000;  */
      /* width: var(--Card-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .item-image{
            border-radius: 10px; 
        }
        .details{  

            .nametag{
                background-color: #fff;  
                /* box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);    */
                /* box-shadow: 5px 5px 15px 5px #000000;  */
            }

            .name{


               li{
                   &:first-child {
                    list-style: none;  
                    }

                    &::marker{
                        /* color:red; 
                        margin: 0;  */
                    }
                    
                }
            }

        }

    }
`;

export default Card;
