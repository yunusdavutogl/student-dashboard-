import './styles/lab-styles.css';
import { useState } from 'react';
import './styles/lab-styles.css'; // CSS dosyasını içe aktar [cite: 38, 203]
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';

// Başlangıç verileri 
const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  // Eyalet (State) tanımlamaları [cite: 78, 116]
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('all'); // 'all', 'pass', 'fail'
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('high-low'); // 'high-low', 'low-high'

  // Yeni öğrenci ekleme [cite: 85]
  const addStudent = (newStudent) => {
    // İsim benzersiz olmalı (büyük/küçük harf duyarsız) [cite: 86]
    const exists = students.some(s => s.name.toLowerCase() === newStudent.name.toLowerCase());
    if (exists) return "exists"; // Formda hata göstermek için

    setStudents(prev => [...prev, newStudent]);
    return "success";
  };

  // Öğrenci silme 
  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // Filtreleme, Arama ve Sıralama Mantığı (Derived Data) [cite: 115-117]
  const visibleStudents = students
    .filter(student => {
      // Duruma göre filtrele [cite: 108]
      if (filter === 'pass') return student.grade >= 60;
      if (filter === 'fail') return student.grade < 60;
      return true;
    })
    .filter(student => 
      // İsme göre ara [cite: 111]
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Notuna göre sırala [cite: 114]
      return sortOrder === 'high-low' ? b.grade - a.grade : a.grade - b.grade;
    });

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>
      
      {/* Öğrenci Ekleme Formu */}
      <StudentForm onAdd={addStudent} students={students} />

      {/* Filtre ve Sıralama Kontrolleri */}
      <StudentControls 
        filter={filter} 
        setFilter={setFilter} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Öğrenci Listesi [cite: 71, 118] */}
      <StudentList 
        students={visibleStudents} 
        onDelete={deleteStudent} 
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;