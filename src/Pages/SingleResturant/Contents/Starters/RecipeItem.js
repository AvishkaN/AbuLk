import styled from 'styled-components';



function RecipeItem({
    className="",
    recipeImg,
    recipeName,
    recipeIngredients,
    recipePrice,
}) {
  return (
    <DIV className={`${className} display-flex align-item-center cursor-p`}>
        {/* Rounded Image  */}
        <div className="col-2">
            <img src={recipeImg} alt="" className='w-100 border-radius-circle' />
        </div>

        {/* Details */}
        <div className="col ms-1">
            <div className="display-flex">

                  {/* name */}
                  <div className="fw-bold">{recipeName}</div>    
                  {/* <div className="">------------------------------------------------</div> */}
                  <hr className="dotted-line ms-2 me-2"></hr>

                  {/* price */}
                  <div className="ms-auto fw-bold">{recipePrice}</div>    
            </div>

                {/* ingredients */}
                <div className="text-color-grey-ori mt-0-5- font-1-6 Dancing-script-font-family">{recipeIngredients}</div>    


        </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RecipeItem */
    
    .col-2 {
    width: 14%;
    
    @media(max-width:450px){     
         width: 17%;
    }

  }

  .dotted-line{
        border: none;
        border-top: 3px dashed var(--color-grey-ori);
        color: #fff;
        background-color: #fff;
        height: 1px;
        flex-grow: 1;
  }

`;

export default RecipeItem;
