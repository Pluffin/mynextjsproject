import React from 'react'
import "./Post.css"
import PostCard from "@/components/PostCard"
import { resolve } from 'styled-jsx/css'

//server component
async function loadPost(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await res.json()

   // esto es para cuando los datos se tardan en llegar await new Promise((resolve)=>setTimeout(resolve, 3000))
    return data

}


async function PostPage() {
  const posts = await loadPost()
  console.log(posts)
  return (
    <div className='grid'>
        {
     
            posts.map(post => (
                <PostCard post ={post} key={post.id}/>
            ))
      }
    </div>
  )
}

export default PostPage