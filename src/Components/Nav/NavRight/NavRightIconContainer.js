import styled from 'styled-components';
import NavRightIcon from './NavRightIcon';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


function IconContainer({className=""}) {  
  return (
    <DIV className={`${className}`}>
         <div className="IconContainer-wrapper display-flex">
            <NavRightIcon text={"Notification"} Icon={NotificationsNoneOutlinedIcon} className='text-size text-color-grey cursor-p '></NavRightIcon>
            <NavRightIcon text={"Searches"} Icon={SearchOutlinedIcon} className='text-size  text-color-grey cursor-p'></NavRightIcon>
            <NavRightIcon text={"Favourites"} Icon={FavoriteBorderOutlinedIcon} className='text-size  text-color-grey cursor-p'></NavRightIcon>
            <NavRightIcon text={"My Chat"} Icon={ChatBubbleOutlineOutlinedIcon} className='text-size  text-color-grey cursor-p'></NavRightIcon>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only IconContainer */
    
    .IconContainer-wrapper{

      .text-size{
        font-size:1.3rem; 
      }

    }
`;

export default IconContainer;
