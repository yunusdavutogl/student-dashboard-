import { useState } from 'react';

function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Temel doğrulama [cite: 81]
    if (!name || grade === '') {
      setError("Name and grade are required!");
      return;
    }

    if (Number(grade) < 0 || Number(grade) > 100) {
      setError("Grade must be between 0 and 100.");
      return;
    }

    // App.jsx'teki addStudent fonksiyonunu çağır [cite: 83]
    const result = onAdd({ id: Date.now(), name, grade: Number(grade) });

    if (result === "exists") {
      setError("Student already exists!"); // Aynı isim hatası [cite: 86]
    } else {
      setName('');
      setGrade('');
    }
  };

  return (
    <div className="form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <input 
          className="input" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          className="input input-grade" 
          type="number" 
          placeholder="Grade" 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)} 
        />
        <button className="btn" type="submit">Add Student</button>
        {error && <span className="form-error">{error}</span>} 
      </form>
    </div>
  );
}

export default StudentForm;