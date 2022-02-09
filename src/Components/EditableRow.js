import React from 'react';

import { FiCheckCircle } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';

const EditableRow = ({ user, editUserForm ,setEditUserForm, setEditUserId }) => {

    //  When user change any value of the edited user then update the editUserForm state.
    const handleUserEditFormChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setEditUserForm({
            ...editUserForm,
            [name]: value
        });
    };
    
    //  Cancel the edit of the user and set the editUserForm state to an empty object.
    const handleUserEditFormCancel = e => {
        e.preventDefault();
        setEditUserId(null);
    };

    return (
        <tr id={user.id} className="data-row bg-white dark:bg-dark whitespace-nowrap hover:cursor-default hover:bg-blue-light dark:hover:bg-blue-dark hover:text-gray">
            <td className="px-6 py-2 whitespace-nowrap text-center">
                <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 outline-none focus:outline-none" 
                id={user.id}
                // checked={user?.isChecked || false}
                value={user.name}
                disabled={true}
                />
            </td>
            <td className="px-5 py-2 whitespace-nowrap text-left">
                <input 
                type="text" 
                name="name" 
                className="form-input px-1 border-2 border-blue-light dark:border-blue-dark rounded bg-indigo-100 dark:bg-indigo-400 focus:outline-none" 
                required="required" 
                placeholder="Enter a name"
                value={user.name}
                onChange={handleUserEditFormChange}
                size={14}
                />
            </td>
            <td className="px-5 py-2 whitespace-nowrap text-left">
                <input 
                type="text" 
                name="email"
                className="form-input px-1 border-2 border-blue-light dark:border-blue-dark rounded bg-indigo-100 dark:bg-indigo-400 focus:outline-none" 
                required="required" 
                placeholder="Enter an email"
                value={user.email}
                onChange={handleUserEditFormChange}
                size={25}
                />
            </td>
            <td className="px-5 py-2 whitespace-nowrap text-left">
                <input 
                type="text" 
                name="role"
                className="form-input px-1 border-2 border-blue-light dark:border-blue-dark rounded bg-indigo-100 dark:bg-indigo-400 focus:outline-none" 
                required="required"
                placeholder="Enter a role"
                value={user.role}
                onChange={handleUserEditFormChange}
                size={9}
                />
            </td>
            <td className="px-6 py-2 whitespace-nowrap text-center">
                <button type="submit" title="Update" className="btn p-2 mr-2 text-green-500 rounded">
                    <FiCheckCircle size={16} />
                </button>
                <button type="button" title="Cancel" className="btn p-2 ml-2 text-red-500 rounded" onClick={handleUserEditFormCancel}>
                    <MdOutlineCancel size={16} />
                </button>
            </td>
        </tr>
    )
}

export default EditableRow
