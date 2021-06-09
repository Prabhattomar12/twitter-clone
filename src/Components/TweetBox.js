import { Avatar, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './TweetBox.css';
import db from '../firebase';

function TweetBox() {
       
      const [tweet , setTweet] = useState('');
      const [image , setImage] = useState('');
                              
     const post = (e) => {
       e.preventDefault();
          if(tweet || image ){
            db.collection('posts')
            .add({
               displayName: 'Prabhat Tomar',
               username: 'Prabhattomar12',
               avatar: '',
               verified: true,
               text: tweet,
               image : image

         })  
          }

       setTweet('')
       setImage('')
     }     


  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
          <Avatar className='tweetBox_avatar' />
          <input value={tweet} onChange={e => setTweet(e.target.value)}   type='text' placeholder='Whats happening? ' />
        </div>
        <input
          value={image}
          onChange={e => setImage(e.target.value)}
          className='imageUrl_input'
          type='text'
          placeholder='Optional Enter image URL'
        />
                 <Button onClick={post} type='submit' className='tweetBox_button'>Tweet</Button>

      </form>
    </div>
  );
}

export default TweetBox;
 