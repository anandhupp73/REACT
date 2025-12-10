import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// -----------------------------------controlled component--------------------------------------------------

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       text : ''
//     }
//   }
//   handleChange=(event)=>{
//     this.setState({text:event.target.value})
//   }
//   render(){
//     return(
//       <>
//         <input type="text" value={this.state.text} onChange={this.handleChange} />
//         <p>{this.state.text}</p>
//       </>
//     )
//   }
// }

// export default App

// ---------------------------------------------------uncontrolled component---------------------------------------------

// class App extends React.Component{
//   constructor(){
//     super()
//     this.inputRef = React.createRef()
//   }
//   handleSubmit=(event)=>{
//     event.preventDefault()
//     alert('input value'+this.inputRef.current.value)
//   }
//   render(){
//     return(
//       <>
//         <form action="" onSubmit={this.handleSubmit}>
//           <input type="text" ref={this.inputRef} />
//           <button type='submit'>submit</button>
//         </form>
//       </>
//     )
//   }
// }

// export default App
// -------------------------------------------------------------------------------------------------------------

// import React, { Component } from "react";

// class StudentManager extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [],                // list of students
//       name: "",                    // form fields
//       age: "",
//       editingId: null             // for update mode
//     };
//   }

//   // Handle input change
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   // Add or Update Student
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, age, students, editingId } = this.state;

//     if (!name || !age) return alert("Please fill all fields");

//     if (editingId === null) {
//       // ADD
//       const newStudent = {
//         id: Date.now(),
//         name,
//         age,
//       };
//       this.setState({
//         students: [...students, newStudent],
//         name: "",
//         age: ""
//       });
//     } else {
//       // UPDATE
//       const updated = students.map((stu) =>
//         stu.id === editingId ? { ...stu, name, age } : stu
//       );
//       this.setState({
//         students: updated,
//         name: "",
//         age: "",
//         editingId: null,
//       });
//     }
//   };

//   // Delete Student
//   handleDelete = (id) => {
//     this.setState({
//       students: this.state.students.filter((stu) => stu.id !== id),
//     });
//   };

//   // Load student data into form for editing
//   handleEdit = (student) => {
//     this.setState({
//       name: student.name,
//       age: student.age,
//       editingId: student.id,
//     });
//   };

//   render() {
//     const { students, name, age, editingId } = this.state;

//     return (
//       <div style={{ padding: 20 }}>
//         <h2>Student Management</h2>

//         {/* Add/Update Form */}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Student Name"
//             value={name}
//             onChange={this.handleChange}
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={age}
//             onChange={this.handleChange}
//           />
//           <button type="submit">
//             {editingId ? "Update Student" : "Add Student"}
//           </button>
//         </form>

//         {/* Student List */}
//         <h3>Student List</h3>
//         <table border="1" cellPadding="10">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {students.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No students found</td>
//               </tr>
//             ) : (
//               students.map((stu) => (
//                 <tr key={stu.id}>
//                   <td>{stu.id}</td>
//                   <td>{stu.name}</td>
//                   <td>{stu.age}</td>
//                   <td>
//                     <button onClick={() => this.handleEdit(stu)}>Edit</button>
//                     <button onClick={() => this.handleDelete(stu.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default StudentManager;
