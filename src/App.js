import './App.css';
import Post from './Post';
import insta from "./instalogo.png" 
import profileimage from'./dp.JPG'
import image from './dp.JPG'
import { useState } from 'react';

function App() {
  const[posts,setPosts]=useState([
    {username:"Anshu",
    profileimage:image,
    image:image,
    caption:"hello this is my first post"
    },

    {
      username:"Anshu",
    profileimage:image,
    image:image,
    caption:"hello this is my first post" 
    }
  
  ])
  return (
    <div>
    {/* //header */}
   <div className='text__header'><img className="insta__logo" src={insta} alt=""/></div>
    {/* <Post username="Anshu" profileimage={profileimage} image={image} caption="Hello this is my first post."/>
    <Post username="Anshu" profileimage={profileimage} image={image} caption="Hello this is my first post."/>
    <Post username="Anshu" profileimage={profileimage} image={image} caption="Hello this is my first post."/> */}
    {
      posts.map(post=>(
        <Post username={post.username} profileimage={post.profileimage} image={post.image} caption={post.caption}/>

      ))
    }

    
    {/* //post */}
    </div>
    
  )
}

export default App;
