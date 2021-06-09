import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_search_box'>
        <SearchIcon />
        <input placeholder='Search Twitter' />
      </div>
      <div className='widgets_container'>
          <h2>What's happening?</h2>
        <TwitterTweetEmbed  className='widget_tweet' tweetId={'933354946111705097'} />
        <TwitterTimelineEmbed
          className='timeline'
          sourceType='profile'
          screenName='saurabhnemade'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          className='share'
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
