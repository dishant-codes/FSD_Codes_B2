import React from 'react'
import { Link } from 'react-router-dom'

function CoursePage() {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    width: '220px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    background: '#fff',
  }

  const containerStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '16px',
  }

  const titleStyle = {
    margin: '0 0 8px',
    fontSize: '18px',
  }

  const linkStyle = {
    display: 'inline-block',
    marginTop: '12px',
    color: '#1a73e8',
    textDecoration: 'none',
    fontWeight: '500',
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={titleStyle}>Full Stack Development</h3>
        <p>Build modern web applications using front-end and back-end technologies.</p>
        <Link style={linkStyle} to="/course/1">View Course</Link>
      </div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>Data Science</h3>
        <p>Analyze data and build machine learning solutions.</p>
        <Link style={linkStyle} to="/course/2">View Course</Link>
      </div>
    </div>
  )
}

export default CoursePage