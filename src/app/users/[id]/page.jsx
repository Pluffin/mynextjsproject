"use client"
import React from 'react'
import { useParams } from 'next/navigation';

function UserPage() {
    const params = useParams()
    console.log(params);
  return (
    <div>
    <button onClick={()=> {
        console.log("working");
    }} ></button>
    
    
    </div>
  )
}

export default UserPage