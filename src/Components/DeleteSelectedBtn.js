import React from 'react'

import { FaTrash } from 'react-icons/fa';

const DeleteSelectedBtn = ({ users, setUsers }) => {

    //  Delete the selected users from the users array and set the users to the state using the setUsers() method.
    const handleDeleteSelected = e => {
        e.preventDefault();
        let newUsers = [...users];
        newUsers = newUsers.filter(user => {
            return !user.isChecked;
        });
        setUsers(newUsers);
    };
    
    return (
        <button 
            data-testid="delete-selected-btn"
            id="first" 
            type="button"
            title="Delete selected"
            className="flex items-center justify-center p-2 md:px-4 shadow-md shadow-red-300 dark:shadow-red-900 text-white bg-red-500 transition-all duration-500 rounded focus:shadow hover:bg-red-600 hover:shadow-lg hover:shadow-red-200 outline-none focus:outline-none" 
            onClick={handleDeleteSelected} 
        >
            <FaTrash />
            <span className="ml-1 md:ml-2 text-xs md:text-base text-left">
                Delete Selected
            </span>
        </button>
    )
}

export default DeleteSelectedBtn
