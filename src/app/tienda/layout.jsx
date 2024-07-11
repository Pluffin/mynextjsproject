import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Store - EdStore',
    description: 'Store section',
    keywords: 'store, products, categories'

}
function StoreLayout
({children}) {
  return (
    <>

    <nav>
        <h3>
            Store Section
        </h3>
        <ul>
            <li><Link href="/tienda/categorias">Categories</Link></li>
            <li><Link href="/tienda/categorias/computadoras">Computers</Link></li>
        </ul>
    </nav>
    
    {children}
    
    </>
  )
}

export default StoreLayout
