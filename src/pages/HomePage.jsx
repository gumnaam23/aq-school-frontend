import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Courses from '../components/Courses'
import About from '../components/About'
import Contect from '../components/Contect'

const HomePage = () => {

    const coursesRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);


    const handleScrollTo = (section) => {
        if (section === 'about') aboutRef.current?.scrollIntoView();
        if (section === 'courses') coursesRef.current?.scrollIntoView();
        if (section === 'contact') contactRef.current?.scrollIntoView();
    };


    return (
        <>
            <header>
                <Navbar onScroll={handleScrollTo} />
                <Slider onScroll={handleScrollTo} />
            </header>
            <main>
                <section ref={coursesRef}><Courses /></section>
                <section ref={aboutRef}><About /></section>
                <section ref={contactRef}><Contect /></section>
            </main>
            <footer>
                <p>© 2025 CodeMaster. All rights reserved.</p>
            </footer>
        </>
    )
}

export default HomePage
