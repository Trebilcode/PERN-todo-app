import React, { useState } from 'react';

const EditTodo = ({ todo }) => {
	const [description, setDescription] = useState(todo.description);

	const updateDescription = async e => {
		e.preventDefault();

		try {
			const body = { description };
			const response = await fetch(
				`http://localhost:5000/todos/${todo.todo_id}`,
				{
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				}
			);

			window.location = '/';
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target={`#id${todo.todo_id}`}
			>
				Edit
			</button>
      

			<div
				className='modal fade'
				id={`id${todo.todo_id}`}
				data-backdrop='static'
				data-keyboard='false'
				tabindex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								Edit
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<input
								onChange={e => setDescription(e.target.value)}
								value={description}
								className='form-control'
								style={{ width: '90%' }}
							/>
						</div>
						<div className='modal-footer'>
							<button
								onClick={e => updateDescription(e)}
								data-dismiss='modal'
								className='btn btn-warning'
							>
								Edit
							</button>
							<button
								type='button'
								className='btn btn-danger'
								data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditTodo;
