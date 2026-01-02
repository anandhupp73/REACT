import { useEffect, useState } from "react";
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';
import Filter from './Components/Filter';

function App() {
  const [students, setStudents] = useState([]);
  const [filterDept, setFilterDept] = useState('');

  //load from localstorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    if (data) setStudents(data);
  }, []);

  //save to local storage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filteredStudents = filterDept ? students.filter((s) =>
    s.department.toLowerCase().includes(filterDept.toLowerCase())
  ) : students;

  return (
    <>
      <div className="container">
        <h1>Student Management</h1>
        <StudentForm addStudent={addStudent} />
        <Filter setFilterDept={setFilterDept} />
        <StudentList students={filteredStudents} deleteStudent={deleteStudent} />
      </div>
    </>
  );
}

export default App