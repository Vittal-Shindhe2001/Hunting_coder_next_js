import React from 'react'
import style from '../styles/about.module.css'

const About = () => {
  return (
    <div className={`d-flex flex-col ${style['max-w']}`}>
      <h1 className='text-center'>About Hunting coder</h1>
      <h2>Introduction</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam obcaecati esse?</p>
      <h3>Service offered</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque harum doloremque expedita! Sit porro quia aspernatur mollitia provident, molestiae ipsa fugit earum, facere ipsum repellendus aperiam fuga quas? Assumenda, doloribus.</p>
      <h3>contact us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam reprehenderit beatae quis ratione, assumenda necessitatibus perspiciatis blanditiis libero cumque itaque laborum eum? Nobis, ipsam eos repellendus quae harum aspernatur?</p>
    </div>
  )
}

export default About
