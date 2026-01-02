export default function StudentList({ students, deleteStudent }) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <span>
            {student.name} - {student.department}
          </span>
          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
