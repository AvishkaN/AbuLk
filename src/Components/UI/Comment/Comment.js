import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/CheckCircle';
import ClockIcon from '@mui/icons-material/AccessTime';

import { Avatar } from '@mui/material';



function Comment({
                        className="",
                        img,
                        profileName,
                        isVerfiifed,
                        time,
                        commentDescription,
                    }) {

  return (
    <DIV className={`${className}row `}>

            {/* Image Avatar */}
            <div className="image-avatar col-md-1 col-2 pe-0">
                <img src={img} alt="" className='w-100 border-radius-circle' />
            </div>


                {/* Other details */}
            <div className="col">

                {/* profile name */}
                    <div className="display-flex align-items-center">
                        <div className="fw-bold">{profileName}</div>
                        {isVerfiifed && <CheckIcon className='this-comp-green-text ms-2 font-1-7'></CheckIcon>}
                    </div>

                    {/* date */}
                    <div className="display-flex align-items-center text-color-grey-ori">
                            <ClockIcon className=''></ClockIcon>
                            <div className="ms-1 font-1-3 ">{time}</div>
                    </div>

                    {/* Comment discription */}
                    <div className="font-1-4  limit-text-line-2-max-width-sm">
                        {commentDescription}
                    </div>

            </div>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Comment */
    
    @media(max-width:576px){      
                      /* align-items:center; */
    }
    
    
    .image-avatar{
        @media(max-width:576px){      
            width: 20%;
        }

    }
 
`;

export default Comment;
