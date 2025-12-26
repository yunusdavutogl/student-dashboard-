function StudentItem({ student, onDelete }) {
  const isPassed = student.grade >= 60; // Geçme notu hesabı [cite: 91]

  return (
    <li className={`student-item ${isPassed ? 'student-pass' : 'student-fail'}`}>
      <div>
        <span className="student-name">{student.name}</span>
        <span className="student-grade">{student.grade}</span>
        <span className="student-status">({isPassed ? 'Pass' : 'Fail'})</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </li>
  );
}

export default StudentItem;