import React from 'react'
import './FeedHeader.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function FeedHeader() {
    return (
        <div className='feedHeader'>
            <h2>Home</h2>
           <StarBorderIcon className='feedHeader_icon' />
        </div>
    )
}

export default FeedHeader
