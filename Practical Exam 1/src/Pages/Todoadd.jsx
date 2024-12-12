import React, { useState } from 'react'

const Todoadd = () => {

    const [task, setTask] = useState("")
    const [status, setStatus] = useState("")
    const [date, setdate] = useState("")
    const [newTask, setNewTask] = useState('');
    const [mdelete, setMdelete] = useState([])

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTask([...task, { task: newTask, status: 'Pending' }]);
            setNewTask('');
        }
    };
    const multipleDeleteRecord = (id, checked) => {
        let old = [...mdelete];
        if (checked) {
            old.push(id)
        }
        else {
            old = old.filter(val => val != id)
        }
        setMdelete(old)

    }
    const multipleDelete = () => {
        let d = record.filter(val => !mdelete.includes(val.id));
        localStorage.setItem("users", JSON.stringify(d));
        setRecord(d);
        alert("multiple status delete");
        setMdelete([])
    }
        
};


export default Todoadd
