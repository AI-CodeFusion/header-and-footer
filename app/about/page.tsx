import React from 'react'

const About = () => {
  return (
    <div className='bg-black h-screen'>
        <h1 className='text-center font-extrabold text-6xl text-red-700 underline p-8'>About Me</h1>
        <br />
        <br />
        <p className='text-white  text-2xl font-bold flex justify-center items-center font-serif m-20 '  data-aos="zoom-in">"I am a teacher, a mother, and a web developer, balancing each role with dedication and passion. Teaching allows me to share knowledge and connect with others, while being a mother is the most rewarding and fulfilling part of my life. As a web developer, I have honed my skills in HTML, CSS, TypeScript, and Next.js, creating dynamic and user-friendly applications. I also enjoy graphic designing, which adds a creative dimension to my work. Each day, I embrace the challenges and joys of these roles, striving to make a positive impact and continuously grow in my craft."</p>
    </div>
  )
}

export default About