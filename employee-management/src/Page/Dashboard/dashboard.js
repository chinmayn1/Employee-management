import React, {useState} from 'react';
import Swal from 'sweetalert2';
import Header from './Header.js';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data'

function Dashboard() {
    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {


    }
    const handleDelete = () => {


    }


    return (
        // <div className='container'>  <Header />  <List /></div>


        <div className='container'>
            {/* List */}

            {!isAdding && !isEditing && (
                <>
                    <Header setIsAdding={setIsAdding} />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* add */}
            {
                isAdding && (
                    <Add
                        employees={employees}
                        setEmployees={selectedEmployee}
                        setIsAdding={setIsAdding}
                    />
                )
            }
            {/* Edit */}
            {
                isEditing && (
                    <Add
                        employees={employees}
                        selectedEmployee={selectedEmployee}
                        setEmployees={selectedEmployee}
                        setIsEditing={setIsEditing}
                    />
                )
            }

        </div>

    )
}

export default Dashboard