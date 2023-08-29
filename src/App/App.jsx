import React, { useState } from 'react';
import StudentData from '../studentData';
import Student from '../Students/Students';
import './App.css';

function App() {
  const [students, setStudents] = useState(StudentData);

  return (
    <div>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
}

export default App;
