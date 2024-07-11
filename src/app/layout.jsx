export const metadata = {
  title: 'EdStore',
  description: 'NextJs First Store',
  authors: {'name':'Edgardo'},
  creator: 'Edgardo Morales Cosme',


}
import Navbar from "@/components/Navbar.jsx"
//cambiar de fuente para toda la aplicacion
import {Roboto}from 'next/font/google'
import "./globals.css"
const roboto = Roboto ({
  weight: ["300", "400", "500","700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]

})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
     <body className={roboto.className}>
      <Navbar/>{/* Aqui podria ir un navbar ya que este es el layout de toda la aplicacion */}
      {children}</body>
    </html>
  )
}
