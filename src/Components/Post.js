import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ShareIcon from '@material-ui/icons/Share';

function Post({ displayName, avatar, username, verified, text, image }) {
  return (
    <div className='post'>
      <div className='post_avatar'>
        <Avatar src={avatar} className='post_user_logo'/>
      </div>
      <div className="post_body">
          <div className="post_header">
             <div className="post_header_userInfo">
             <h3>{displayName}</h3>
              <span> {verified && <VerifiedUserIcon /> } {username}</span>  
             </div>
            <p>{text}</p>
          </div>
           <img  src={image}  />
         <div className="post_footer">
           <ThumbUpIcon />
           <ThumbDownAltIcon />
           <InsertCommentIcon />
           <ShareIcon />
         </div>
      </div>
    </div>
  );
}

export default Post;
