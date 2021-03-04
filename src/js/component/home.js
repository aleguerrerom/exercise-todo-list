import React, { useState } from "react";

//include images into your bundle
let todos = ["Comer", "Dormir"];

export function Home() {
	const [inputValue, fnInputValue] = useState("");
	const [addtoArray, fnAddtoArray] = useState(todos);
	const addTodo = e => {
		if (e.key == "Enter") {
			if (inputValue !== "") {
				const todosnew = addtoArray.concat(inputValue);
				fnAddtoArray(todosnew);
				fnInputValue("");
			} else alert("");
		}
	};
	function removeTodo(task) {
		const todosnew = addtoArray.filter(item => item !== task);
		fnAddtoArray(todosnew);
	}
	const TodoList = () => {
		return (
			<div>
				<ul>
					{addtoArray.map(item => (
						<li className="lista" key={item}>
							{item}

							<i
								id="right"
								className="fas fa-trash-alt"
								onClick={() => removeTodo(item)}></i>
						</li>
					))}
				</ul>
				<p>{addtoArray.length} item left</p>
			</div>
		);
	};

	return (
		<div className="card">
			<h1>todos</h1>
			<div className="cartita">
				<input
					type="text"
					placeholder="What do you need?"
					value={inputValue}
					onChange={e => fnInputValue(e.target.value)}
					onKeyUp={addTodo}></input>
				<TodoList />
			</div>
		</div>
	);
}

// function Example() {
// 	// Declara una nueva variable de estado, la cual llamaremos “count”  const [count, setCount] = useState(0);
// 	const [count, setCount] = useState(0);
// 	return (
// 		<div>
// 			<p>You clicked {count} times</p>
// 			<button onClick={() => setCount(count + 1)}>Click me</button>
// 		</div>
// 	);
//}

// class ControlledInput extends React.Component {
// 	state = {
// 		value: "Add To Dos"
// 	};
//     arr = [];

// 	render() {
// 		return (
// 			<div>
// 				<h1>Todos</h1>
// 				<input
// 					onChange={e => this.setState({ value: e.target.value })}
// 					value={this.state.value}
// 				/>
// 				<br />
// 				<ul>{this.state.value}</ul>
// 				<br />
// 				<button
// 					onClick={() =>
// 						this.setState({
// 							value: (
// 								<li>
// 									<span onClick={()=> removeTodo(todo.id)}>
// 										{this.state.value}{" "}
// 										<i className="fas fa-trash-alt"></i>
// 									</span>
// 								</li>
// 							)
// 						})
// 					}>
// 					Add todos
// 				</button>
// 			</div>
// 		);
// 	}
// }

// export default function TodoApp() {
// 	const [todo, setTodo] = React.useState("");
// 	const [todos, setTodos] = React.useState([]);

// 	const handleChange = e => {
// 		setTodo(e.target.value);
// 	};

// 	const addTodo = () => {
// 		setTodos([
// 			...todos,
// 			{
// 				id: todos.length + 1,
// 				text: todo,
// 				completed: false
// 			}
// 		]);
// 	};

// 	const onSubmit = e => {
// 		e.preventDefault();
// 		if (todo === "") return;
// 		addTodo();
// 		setTodo("");
// 	};

// 	const removeTodo = todoId => {
// 		const updatedTodos = todos.filter(todo => todo.id !== todoId);
// 		setTodos(updatedTodos);
// 	};

// 	const toggleTodo = todoId => {
// 		const updatedTodos = todos.map(todo => {
// 			return todo.id === todoId
// 				? { ...todo, completed: !todo.completed }
// 				: todo;
// 		});
// 		setTodos(updatedTodos);
// 	};

// 	return (
// 		<div className="container">
// 			<form onSubmit={onSubmit}>
// 				<label htmlFor="todo">Todos</label>
// 				<br />
// 				<input
// 					id="todo"
// 					className="todo-input"
// 					onChange={handleChange}
// 					value={todo}
// 				/>
// 				<button type="submit" className="add-btn">
// 					Agregar
// 				</button>
// 			</form>
// 			<div>
// 				<ul>
// 					{todos.map(todo => (
// 						<li key={todo.id}>
// 							<span
// 								className={
// 									todo.completed
// 										? "todo-completed"
// 										: undefined
// 								}
// 								onClick={() => toggleTodo(todo.id)}>
// 								{todo.text}
// 							</span>
// 							<span
// 								className="delete-btn"
// 								onClick={() => removeTodo(todo.id)}>
// 								{"         "}
// 								<i className="fas fa-trash-alt"></i>
// 							</span>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

// //create your first component
