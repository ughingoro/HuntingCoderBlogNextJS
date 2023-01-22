import React from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles5 from '../styles/Navbar.module.css'

const Navbar = ()=>{

    return(
        <nav className={styles5.mainnav}>
        <ul> 
          <Link href='/'> <a>Home</a> </Link>
          <Link href='/About'> <a>About</a> </Link>
          <Link href='/Blog'> <a>Blog</a> </Link>
          <Link href='/Contact'> <a>Contact</a> </Link>
        </ul>
      </nav>

        )
}

export default Navbar