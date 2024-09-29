
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";


export default function Home() {
  return (
    <>
     
      <div
        className="d-flex align-items-center  flex-column  pt-5 gap-2 vh-100"
      >

        {/* <Script src="sc.js" strategy="lazyOnload"></Script> */}
        <h1> Hunting Coder</h1>
        {/* <Image src='/developer.avif' width={400} height={225} alt="developer" className="developerImage"/> */}
        <img src='/developer.avif' width={400} height={225} alt="developer" className="developerImage"/>
        <p className="p-2 text-bg-primary">A blog for hunting coder by a hunting coder</p>
        <div className="blog">
          <div className="blogItem">
            <h1>Popular Blogs</h1>
            <h3>How to learn javascript in 2024?</h3>
            <p>javascript is language used to design logic for web</p>
          </div>
        </div>
      </div>
    </>
  );
}
