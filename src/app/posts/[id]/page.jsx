import React from 'react'
import PostPage from "../page"
import { Suspense } from 'react'
async function loadPost(id){

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  const data = await res.json()

// await new Promise((resolve)=>setTimeout(resolve, 5000))
 return data



}
async function Page({params}) {

const post = await loadPost(params.id)

  return (<>
  <h1>{post.id}</h1>
    <h1>{post.title}</h1>
   <p>{post.body}</p>
<hr/>
   <h3>Other Posts</h3>
   {/* este componente es para que los componentes que esten dentro, no se rendericen si se van a tardar en cargar, y que se renderice el de arriba primero y luego el de abajo */}
  <Suspense fallback={
    <h1>Loading...</h1>
  
  }>
    <PostPage/>
  </Suspense>
   
</>  )
}

export default Page