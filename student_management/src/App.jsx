import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      name: "",
      age: "",
      department: "",
      editID: null,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, department, students, editID } = this.state;

    if (!name || !age || !department ) return alert("please fill all fields");

    if (editID === null) {
      const newStudent = {
        id: Date.now(),
        name,
        age,
        department,
      };
      this.setState({
        students: [...students,newStudent],
        name: "",
        age: "",
        department: "",
      });
    } else {
		const updated = this.state.students.map((s)=> s.id === editID ? {...s,name,age,department} : s);
		this.setState({
			students : updated,
			name : "",
			age : "",
			department : "",
			editID : null,
		})
    }
  };
  handleEdit = (student) => {
	this.setState({
		name: student.name,
		age: student.age,
		department: student.department,
		editID: student.id,
	});
	};

	handleDelete = (id) => {
	const confirmDelete = window.confirm("Are you sure you want to delete?");
	if (!confirmDelete) return;

	const filteredStudents = this.state.students.filter(
		(stu) => stu.id !== id
	);

	this.setState({ students: filteredStudents });
	};
  render(){

	return(
		<>
		<div>
			<h1>student management</h1>

			<form action="" onSubmit={this.handleSubmit}>
				<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
				<input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange}/>
				<input type="text" name="department" placeholder="department" value={this.state.department} onChange={this.handleChange}/>
				<button type="submit">
					{this.state.editID ? "update Student" : "Add student"}
				</button>
			</form>

			<h3>Student data</h3>
			<table border="1">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Age</th>
						<th>Department</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.state.students.map((stu) => (
					<tr key={stu.id}>
						<td>{stu.id}</td>
						<td>{stu.name}</td>
						<td>{stu.age}</td>
						<td>{stu.department}</td>
						<td>
						<button onClick={() => this.handleEdit(stu)}>Edit</button>
						<button onClick={() => this.handleDelete(stu.id)}>
							Delete
						</button>
						</td>
					</tr>
					))}
				</tbody>
			</table>

		</div>
		</>
	)
  }
}

export default Student