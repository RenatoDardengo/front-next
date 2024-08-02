import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import style from "./page.module.css";
import Link from 'next/link';
import { ReactNode } from 'react';
interface MainProps {
  children: ReactNode;

}
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({children,}: MainProps) {
  return (
    <html lang="pt-br">
     
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Homepage do site e-commerce</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap" rel="stylesheet"/>
        </head>
        <body className={style.main}>
        <header className={style.header_main}>
          <nav className={style.nav_main}>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Produtos</Link>
            <Link href={"/contacts"}>Contato </Link>
          </nav>
        </header>
        
          {children}
        </body>
      {/*<footer className={style.footer_class}>
        <p>Copyright &copy; 2023</p>
        </footer>*/}
      
       </html>
  )
}
