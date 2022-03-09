import styled from 'styled-components';
import FavoriteIconSvg from '@mui/icons-material/FavoriteBorder';
import FavoriteIconFilledSvg from '@mui/icons-material/Favorite';


function FavIcon({className="",filled=false}) {
  return (
      <>
            {!filled && (<FavoriteIconSvg className={`p-2  text-color-red   box-shadow-red border-radius-circle cursor-p   ${className} `}></FavoriteIconSvg> )   }
            {filled && (<FavoriteIconFilledSvg className={`p-2  text-color-red   box-shadow-red border-radius-circle cursor-p   ${className} `}></FavoriteIconFilledSvg> )   }
      </>
 
    );
}




export default FavIcon;
