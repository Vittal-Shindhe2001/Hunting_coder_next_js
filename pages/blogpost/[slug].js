import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/blogposts.module.css'
import * as fs from 'fs'

// step1:Find the file corresponding to the slug
// step2:populate them inside page
const Slug = (props) => {
  const [blog, setblog] = useState(props.blog)
  return (

    <div className={styles.main}>
      <div>
        <h1>Title of the page {blog && blog.title}</h1>
        <hr />
        <div >{blog && blog.content}</div>
      </div>
    </div>

  )
}
// This gets called on every request
// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   // Fetch data from external API
//   const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   let blog = await data.json()

//   // Pass data to the page via props
//   return { props: { blog } }
// }

// getStaticPaths
export const getStaticPaths = (async () => {
  const allb=await fs.promises.readdir('blogdata')
  const allblogsname=allb.map(ele=>{
    return {params:{slug:ele.split('.')[0]}}
  })
  return {
    paths: allblogsname,
    fallback: true, // false or "blocking"
  }
})
// getStaticProps
export async function getStaticProps(context){
  const {slug}=context.params
  
  const blog=await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')  
  return {props:{blog:JSON.parse(blog)}}
}
export default Slug
