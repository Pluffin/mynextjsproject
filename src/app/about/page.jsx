"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

function AboutPage() {
  const router = useRouter()
  return (
    <section>
      <h1>About</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio maxime inventore harum vero id repellendus atque ut deleniti similique maiores, rerum, accusantium mollitia quaerat consequatur, aperiam cupiditate aliquam voluptatibus quos facilis nemo? Dolorum, voluptates! Minima modi non, consequuntur eveniet dolor harum atque iste ratione aliquam ducimus accusamus explicabo fuga facilis cumque quasi repellendus cum. Itaque saepe quae odio, repudiandae tenetur vitae necessitatibus. Voluptas eveniet tempora pariatur dolorem vero nisi voluptatum maiores neque quibusdam, officia voluptatem accusantium quia iusto dolorum cupiditate ex tempore cum harum eligendi repellendus, aliquid voluptate! Et, aliquam? Saepe nemo hic ratione deserunt corporis molestias nam sequi sit.</p>

    <button
    className='bg-sky-400 px-3 py2 rounded-md'
    onClick={()=>{
      alert('Executing code')
      router.push('/')
    }}>
      Click
    </button>
     
    </section>
  )
}

export default AboutPage