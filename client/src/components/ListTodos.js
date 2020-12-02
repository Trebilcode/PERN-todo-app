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
							<tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
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
