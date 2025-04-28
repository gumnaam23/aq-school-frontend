import React from 'react'
import { useNavigate } from 'react-router-dom';


const Card = () => {

    const navigate = useNavigate();

    const handleClick = (leng) => {
        navigate('/courses?course=javascript');
    };

    return (
        <div className='card'>
            <img src="./jsLogo.webp" alt="" />
            <div className="card_content">

                <h4>JavaScript Essentials in hinglish/roman urdu</h4>
                <p>Master the fundamentals of JavaScript
                    {/* with hands-on projects and quizzes. */}
                </p>
                <button onClick={handleClick}>Enroll Now</button>
            </div>
        </div>
    )
}

export default Card

