import React, { useEffect, useState, Fragment } from 'react'

import "./App.css"
import Api from "./Services/Api";
import DeleteSelectedBtn from './Components/DeleteSelectedBtn';
import SearchUser from './Components/SearchUser';
import EditableRow from './Components/EditableRow';
import DisplayRows from './Components/DisplayRows';
import Pagination from './Components/Pagination';

const App = () => {

  //  Use state to store the users data from the API call and set it to an empty array initially.
  const [users, setUsers] = useState([]);

  //  Use state to store the edited user data and set it to an empty object initially.
  const [editUserForm, setEditUserForm] = useState({
    id: '',
    name: '',
    email: '',
    role: ''
  });

  //  use state to set the id of the user to be edited and set it to null initially.
  const [editUserId, setEditUserId] = useState();

  //  Use state to store the search text entered by the user and set it to an empty string initially.
  const [searchResult, setSearchResult] = useState('');

  //  Use state to store the current page number and set it to 1 initially.
  const [currentPage, setCurrentPage] = useState(1);

  //  Use state to store the number of users per page and set it to 10 initially.
  const [itemPerPage] = useState(10);

  //  Get the users from the API when the component mounts and set the users to the state using the setUsers() method.
  useEffect(() => {
    Api.getUsers()
    .then(data => setUsers(data))
    .catch(error => console.log(error));
  }, []); //  [] is used to tell React that this effect should only run once.

  const indexOfLastItem = currentPage * itemPerPage;  //  Calculate the index of the last item in the current page.
  const indexOfFirstItem = indexOfLastItem - itemPerPage; //  Calculate the index of the first item in the current page.
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);  //  Get the users in the current page.

  //  Checked all the users in the current page and set the users to the state using the setUsers() method.
  const handleAllChecked = e => {
    const { checked } = e.target;
    let newUsers = [...users];
    for(let i=indexOfFirstItem; i<indexOfLastItem; i++) {
      newUsers[i].isChecked = checked;
    }
    setUsers(newUsers);
  };

  //  After the user has edited the user data, set the users to the state using the setUsers() method.
  const handleUserEditFormSubmit = e => {
    e.preventDefault();
    const editedUser = {
      id: editUserId,
      name: editUserForm.name,
      email: editUserForm.email,
      role: editUserForm.role
    };
    const newUser = [ ...users ];
    const index = newUser.findIndex(user => user.id === editUserId);
    newUser[index] = editedUser;
    setUsers(newUser);
    setEditUserId(null);
  };
  
  //  Return the list of users that match the search text entered by the user.
  const searchResultUser = user => {
    if(searchResult === '') {
      return user;
    }
    else if (user.name.toLowerCase().includes(searchResult.toLowerCase()) || user.email.toLowerCase().includes(searchResult.toLowerCase()) || user.role.toLowerCase().includes(searchResult.toLowerCase())) {
      return user;
    }
    return null;
  };

  return (
    <div className="min-h-screen min-w-screen bg-background text-gray text-center flex justify-center items-center">
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-1">
        <div className="relative mt-4 flex flex-col justify-center">

          <div className="py-1 pt-0 flex justify-between items-center">
            <DeleteSelectedBtn users={users} setUsers={setUsers} />
            <SearchUser searchResult={searchResult} setSearchResult={setSearchResult} />
          </div>

          <div className="mt-1 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full p-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <form onSubmit={handleUserEditFormSubmit}>
                    <table className="min-w-full whitespace-nowrap table-fixed">
                      <thead className="">
                        <tr className="text-left text-md font-medium text-gray-deep uppercase tracking-wider">
                          <th scope="col" className="px-6 py-2 w-auto text-center">
                            <input  
                            type="checkbox" 
                            value="checkedAll" 
                            className="form-checkbox h-4 w-4" 
                            onChange={handleAllChecked} 
                            checked={ users.slice(indexOfFirstItem, indexOfLastItem).filter( user => user?.isChecked !== true ).length < 1 }
                            />
                          </th> 
                          <th scope="col" className="px-6 py-2">Name</th>
                          <th scope="col" className="px-6 py-2">Email</th>
                          <th scope="col" className="px-6 py-2">Role</th>
                          <th scope="col" className="px-6 py-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="relative divide-y-4 divide-transparent">
                        {
                          users && users.length > 0 
                          ? currentItems
                            .filter((user) => searchResultUser(user))
                            .map((user, index) => (
                              <Fragment key={index}>
                                {
                                  editUserId === user.id 
                                  ? <EditableRow 
                                      key={index+20} 
                                      user={editUserForm}
                                      editUserForm={editUserForm}
                                      setEditUserForm={setEditUserForm}
                                      setEditUserId={setEditUserId}
                                    />
                                  : <DisplayRows 
                                      key={index+10} 
                                      user={user} 
                                      users={users}
                                      setUsers={setUsers}
                                      setEditUserId={setEditUserId}
                                      setEditUserForm={setEditUserForm}
                                    /> 
                                }
                              </Fragment>
                            ))
                          : <tr>
                              <td colSpan='4'>No users found</td>
                            </tr>
                        }
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-10 md:py-6 bottom-0">
            <Pagination 
              users={users}
              itemPerPage={itemPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          
        </div>
      </main>
    </div>
  )
}


export default App;