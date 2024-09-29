import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
// import * as fs from 'fs'
// step1: collect all the files from blogdata directory
// step2:Iterate through the and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs)
  return (

    <div className={styles.blog}>


      {
        blogs.map((ele) => {
          return <div key={ele.title}>
            <Link href={`blogpost/${ele.slug}`}><h3 className={styles.blogItemh3}>{ele.title}</h3></Link>
            <p className={styles.blogItemp}>{ele.content.substr(0, 140)}....</p>
          </div>
        })
      }

    </div>

  )

}
// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//  const data=await fetch('http://localhost:3000/api/blogs')
//  let allblogs=await data.json()

//   // Pass data to the page via props
//   return { props: { allblogs } }
// }

export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata')
  let myfile
  const allblogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allblogs.push(JSON.parse(myfile))

  }
  return { props: {allblogs} }

}
export default Blog
