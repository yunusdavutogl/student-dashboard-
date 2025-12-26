import StudentItem from './StudentItem';

function StudentList({ students, onDelete, searchTerm }) {
  if (students.length === 0) {
    return (
      <p className="no-data">
        {searchTerm ? `No students match "${searchTerm}"` : "No students yet"}
      </p>
    );
  }

  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem 
          key={student.id} 
          student={student} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

export default StudentList;