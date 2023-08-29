import React from 'react';
import Score from '../Score/Score'; // Make sure to adjust the import path
import './Students.css'

const Student = ({ student }) => {
  const { name, bio, scores } = student;

  return (
    <div className="student-box"> 
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Scores:</p>
      <ul style={{ listStyleType: "none" }}>
        {scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </ul>
    </div>
  );
};

export default Student;
