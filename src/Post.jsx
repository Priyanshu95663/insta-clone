import { Avatar } from '@mui/material'
import React from 'react'
// import image from "./dp.JPG"
import "./Post.css"

function Post(props) {
  return (

        <div className="post">
          <div className="header">
            <Avatar className='post__avatar' alt="" src={props.profileimage}/>
              <h3 className='pst__text'>{props.username}</h3>
           </div>
          <img className="post__img" src={props.image} alt="" />
          <h4 className='post__text'><strong>{props.username}</strong>{props.caption}</h4>
         {/* //image
         //caption */}
         </div>
    
  )
}

export default Post
