import React, { useState } from "react";

function App() {
	const [newInput, setInputChange] = useState("");
	const [todoList, setToDoList] = useState([]);

	function handleSubmit() {
		setToDoList((prevsValue) => {
			return [...prevsValue, newInput];
		});
		setInputChange("");
	}

	function handleChange(event) {
		const { value } = event.target;
		setInputChange(value);
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input type="text" onChange={handleChange} value={newInput} />
				<button onClick={handleSubmit}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					<li>List</li>
					{todoList.map((item) => {
						return <li key={item}>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
