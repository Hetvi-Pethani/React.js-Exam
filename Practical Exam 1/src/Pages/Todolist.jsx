import React, { useState } from 'react';

const Todolist = () => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && status.trim() && date.trim()) {
      setTasks([...tasks, { task, status, date }]);
      setTask('');
      setStatus('');
      setDate('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div align="center">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </div>
        <br />
        <div>
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
        </div>
        <br />
        <div>
          <label>Deadline</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <br />
        <button type="submit">Add Task</button>
      </form>
      <br />
      <h3>Task List</h3>
      {tasks.length > 0 ? (
        <table border="1" cellPadding="10" style={{ margin: '0 auto', width: '50%' }}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((taskItem, index) => (
              <tr key={index}>
                <td>{taskItem.task}</td>
                <td>{taskItem.status}</td>
                <td>{taskItem.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks added yet.</p>
      )}
    </div>
  );
};

export default Todolist;
