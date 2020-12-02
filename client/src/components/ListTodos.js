import React, { useEffect, useState } from 'react';

const ListTodos = () => {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const response = await fetch('http://localhost:5000/todos');
			const jsonData = await response.json();

			setTodos(jsonData);
		} catch (error) {
			console.log(error.message);
		}
	};

	const onDeleteTodo = async todoId => {
		try {
			const deleteTodo = await fetch(`http://localhost:5000/todos/${todoId}`, {
				method: 'DELETE',
      });

      setTodos(todos.filter(todo => todo.todo_id !== todoId))
      
      console.log(deleteTodo);
		} catch (error) {}
	};

	useEffect(() => {
		getTodos();
	}, []);

	console.log(todos);

	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Description</th>
						<th scope='col'>Edit</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{
						todos.map(todo => (
							<tr key={todo.todo_id}>
								<td>{todo.description}</td>
								<td>Edit</td>
								<td>
									<button
										onClick={() => onDeleteTodo(todo.todo_id)}
										className='btn btn-danger'
									>
										Delete
									</button>
								</td>
							</tr>
						)) /* <tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope='row'>3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr> */
					}
				</tbody>
			</table>
		</div>
	);
};

export default ListTodos;
