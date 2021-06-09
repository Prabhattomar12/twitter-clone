import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='twitter_logo' />
      <SidebarOption active text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={SearchIcon} />
      <SidebarOption text='Notification' Icon={NotificationsIcon} />
      <SidebarOption text='Message' Icon={MailOutlineIcon} />
      <SidebarOption text='Bookmarks' Icon={BookmarkBorderIcon} />
      <SidebarOption text='Lists' Icon={ListIcon} />
      <SidebarOption text='Profile' Icon={PersonIcon} />
      <SidebarOption text='More' Icon={MoreHorizIcon} />
      <Button className='sidebar_tweet' variant='outlined' fullWidth >Tweet</Button>
    </div>
  );
}

export default Sidebar;
