 import React from 'react'
import styles2 from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
    <style jsx global>
      {'.blogItem{ background: green } h2{background: red}'}
    
    </style>

    <div className='{styles.container}'>
      <main className='{styles2.main}'>

      {/* <h2>"Popular Blogs"</h2> */}
          <div className={styles2.blogItem}>
          <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>
            <p>JavaScript is the language used to design logic for web.</p>
          </div>
          <div className="blogItem">
          <Link href={'/blogpost/learn-php'}>
            <h3>How to learn php in 2022?</h3>
          </Link>
            <p>JavaScript is the language used to design logic for web.</p>
          </div> 
          <div className="blogItem">
          <Link href={'/blogpost/learn-python'}>
            <h3>How to python in 2022?</h3>
          </Link>
            <p>JavaScript is the language used to design logic for web.</p>
          </div>
      </main>
    </div>
    </>
  )
}

export default Blog