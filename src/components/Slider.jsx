import React from 'react'

const Slider = ({ onScroll }) => {
    return (
        <section className='slider_section'>

            <div className="slider_container">
                <h2>Master JavaScript from Scratch</h2>
                <p>Interactive lessons. Real projects. Lifetime access.</p>
                <div onClick={() => onScroll('courses')} >Browse Courses</div>
            </div>
        </section>
    )
}

export default Slider
