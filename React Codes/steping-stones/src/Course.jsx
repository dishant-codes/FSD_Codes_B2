import React from 'react'
import { useParams, Link } from 'react-router-dom';

function Course() {
  const data = [
    {
      courseID: 1,
      title: "Full Stack Development",
      duration: "6 Months",
      syllabus: ["ReactJs", "HTML", "CSS", "JavaScript", "JAVA", "SpringBoot"]
    },
    {
      courseID: 2,
      title: "Data Science and AI",
      duration: "6 Months",
      syllabus: ["Python","Excel","MySQL", "Power BI", "AI"]
    }
  ]

  const {courseId} = useParams();


  const course = data.find((course)=> course.courseID == courseId);
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.duration}</p>
      <p>{course.syllabus}</p>

    </div>
  )
}

export default Course