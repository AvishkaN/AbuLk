import styled from 'styled-components';
import LocationIconSvg from '@mui/icons-material/LocationOn';
import FavoriteIconSvg from '@mui/icons-material/FavoriteBorder';
import FavIconFilled from '../../Components/UI/FavIcon/FavIcon';
import StarSection from '../../Components/UI/StarSection/StarSection';
import Button from '../../Components/UI/Button/Button';



function ResturantCardItem({
    className="",
    tag,
    image,
    category,
    categoryIconSvg,
    isOpenNow,
    Name,
    StarCount,
    Reviews,
    startPirce,
    endPrice,
    phoneNumber,
    loacation,
    IsSaved,
}) {
  return (
    <DIV className={`row ${className} `} IsOpenNow={isOpenNow}>
        {/* Image */}
        <div className="col-12">
                <img src={image} alt="" className='w-100' />    
        </div>

        {/* Details */}
        <div className="col-12">
            {/* category row */}
            <div className="category-row display-flex align-item-center ps-3 pt-2 pe-3 pb-2">

                {/* category icon  */}
                <div className="category-icon p-2 border-radius-circle display-flex align-items-center justify-content-between">
                        {categoryIconSvg}
                 </div>
                
                {/* category name */}
                <div className="ms-3 fw-bold">{category}</div>

                {/* category button */}
                <Button className={`font-1-2 text-color-white ms-auto  `} >{isOpenNow ?'OPEN':"Close"}</Button>

            </div>

            {/* Resturant Name */}
            <div className="">{Name}</div>
        </div>

    </DIV>
  );
}


const DIV=styled.div`

.category-row{
    background-color:#FED74E;
    
    .category-icon{
        background-color:#FE3350;
        outline: #fdfdfd solid 2px;
        
    }
    
    button{
        background-color:${props => props.IsOpenNow? `#3EC04A`:`#FE3350`};

    }

}

    
   
`;

export default ResturantCardItem;
