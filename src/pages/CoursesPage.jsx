import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import courseDetails from '../data/courseDetails.js';
import remarkGfm from 'remark-gfm';





const CoursesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseFromURL = queryParams.get('course');

  const [selectedCourse, setSelectedCourse] = useState(courseFromURL || 'javascript');
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    if (courseFromURL && courseDetails[courseFromURL]) {
      setSelectedCourse(courseFromURL);
      setSelectedTopic(null);
    } else {
      setSelectedCourse('javascript');
    }
  }, [courseFromURL]);

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
    setSelectedTopic(null);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const course = selectedCourse ? courseDetails[selectedCourse] : null;

  return (
    <div className="courses-layout" style={{ display: 'flex', gap: '2rem',  }}>
      {/* Sidebar for selected course */}
      {course && (
        <aside className="topics-sidebar" style={{ minWidth: '200px' }}>
          <h3>{course.title} Topics</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {course.topics.map((topic, index) => (
              <li
                key={index}
                onClick={() => handleTopicClick(topic)}
                style={{ cursor: 'pointer', marginBottom: '10px' }}
              >
                📘 {topic.name}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main className="course-main" style={{ flex: 1 }}>
        <h1>Explore Our Courses</h1>

        <div className="course-buttons" style={{ marginBottom: '1rem' }}>
          <button onClick={() => handleCourseClick('javascript')}>JavaScript</button>
          {/* <button onClick={() => handleCourseClick('python')}>Python</button> */}
        </div>

        {course && (
          <div className="course-content">
            {!selectedTopic && (
              <>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p><em>Select a topic to get started.</em></p>
              </>
            )}

            {selectedTopic && (
              <div>
                <h3>{selectedTopic.name}</h3>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedTopic.content}
                </ReactMarkdown>
                <br />

                {selectedTopic.example && (
                  <>
                    <h4>Example:</h4>
                    <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
                      <code>{selectedTopic.example}</code>
                    </pre>
                  </>
                )}
              </div>
            )}

            {selectedCourse && (
              <p style={{ marginTop: '2rem' }}><strong>You are enrolled!</strong></p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CoursesPage;







