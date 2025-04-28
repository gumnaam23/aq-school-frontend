import React, { useEffect, useRef } from 'react'

const About = () => {

  const about = useRef(null)

  useEffect(() => {
   about.current.scrollHeight
   
  }, [about])
  

  return (
    <section ref={about} className='about_section' id='about'>
      <h3>Our About</h3>
      {/* <p>We are passionate coders helping you learn web development in the most practical way.</p> */}
      <p>At [Aq-School], we believe in the power of learning through real-world application. Our mission is to make web development accessible to everyone, from beginners to seasoned developers, by providing hands-on, interactive learning experiences.

We are a passionate team of web enthusiasts, developers, and educators who aim to simplify the complex world of coding. Whether you're just starting your coding journey or looking to refine your skills, we offer a variety of resources that make learning JavaScript, Python, and more easy, fun, and practical.

What sets us apart is our commitment to providing real-life projects, clear explanations, and a community that supports and motivates you every step of the way. We focus on teaching not just the theory but how to apply it to solve real-world problems.

Join us and start your learning adventure today. Let's build something amazing together!
</p>
    </section>
  );
}

export default About
