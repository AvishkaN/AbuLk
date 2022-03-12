import styled from 'styled-components';



function RecipeItem({
    className="",
    recipeImg,
    recipeName,
    recipeIngredients,
    recipePrice,
}) {
  return (
    <DIV className={`${className}`}>
        {/* Rounded Image  */}
        <img src={recipeImg} alt="" />

        {/* Details */}
        <div className="">
            <div className="display-flex">

                  {/* name */}
                  <div className="fw-bold">{recipeName}</div>    

                  {/* price */}
                  <div className="ms-auto fw-bold">{recipePrice}</div>    
            </div>

                {/* ingredients */}
                <div className="text-color-grey-ori mt-0-5- font-1-4 Dancing-script-font-family">{recipeIngredients}</div>    


        </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RecipeItem */
    
    .RecipeItem-wrapper{
      /* width: var(--RecipeItem-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default RecipeItem;
