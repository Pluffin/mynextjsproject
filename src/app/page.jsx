//esto debe importarse siempre que el codigo vaya a utilizar funcionalidades de client component y no de servidor, como hooks de react y funciones onclick onchange etc
import React from 'react'

import Users from "@/components/Users.jsx"
function HomePage () {
  return (
    <section>
    <h1>Hello World</h1>
    
    <Users/>
    </section>
  )
}

export default HomePage 