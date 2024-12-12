import React from 'react'
import Header from "../Component/Header";
import Todolist from '../Pages/Todolist';
import Todoadd from '../Pages/Todoadd';

const Add = () => {
    return (
        <div>
            <Header />
            <Todolist />
            <Todoadd/>

        </div>
    )
}

export default Add
