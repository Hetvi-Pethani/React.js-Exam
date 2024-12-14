import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [City, setCity] = useState('');
  const [Salary, setSalary] = useState('');
  const [Designation, setDesignation] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmp = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmp);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Name || !Email || !Password || !City || !Salary || !Designation) {
      alert('All field requerd');
      return;
    }
    const newEmployee = {
      id: employees.length + 1,
      name: Name,
      email: Email,
      password: Password,
      city: City,
      salary: Salary,
      designation: Designation,
    };

    const updatedEmp = [...employees, newEmployee];
    setEmployees(updatedEmp);
    localStorage.setItem('employees', JSON.stringify(updatedEmp));

    setName('');
    setEmail('');
    setPassword('');
    setCity('');
    setSalary('');
    setDesignation('');
  };

  const handleDelete = (id) => {
    const updatedEmp = employees.filter((val) => val.id !== id);
    setEmployees(updatedEmp);
    localStorage.setItem('employees', JSON.stringify(updatedEmp));
  };


  const handleUpdate = (id) => {
    const employeeToEdit = employees.find((val) => val.id === id);
    setName(employeeToEdit.name);
    setEmail(employeeToEdit.email);
    setPassword(employeeToEdit.password);
    setCity(employeeToEdit.city);
    setSalary(employeeToEdit.salary);
    setDesignation(employeeToEdit.designation);
    handleDelete(id);
  };

  return (
    <div className="container mt-5">
      <h2 align="center ">Employee Management System Add</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Email</label>
          <input type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Password</label>
          <input type="password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" value={City} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" className="form-control" value={Salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" className="form-control" value={Designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <button type="submit" className="btn"> {Name ? 'Update Employee' : 'Add Employee'} </button>
      </form>

      <h3 className="mt-5">Employee Records View</h3>
      <table className="table  mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.city}</td>
                <td>{employee.salary}</td>
                <td>{employee.designation}</td>
                <td>
                  <button className="btn  btn-sm" onClick={() => handleUpdate(employee.id)} >  Edit </button>
                  <button className="btn btn-sm ms-2"onClick={() => handleDelete(employee.id)}> Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
