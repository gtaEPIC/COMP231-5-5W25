import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getIsAdmin, isAuthenticated} from "./login-helper";

let apiURL = process.env.REACT_APP_APIURL || 'http://localhost:3000'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated() || !getIsAdmin()) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        if (!sessionStorage.getItem('jwt')) ;
        setLoading(true)
        const fetchUsers = async () => {
            try {
                const response = await fetch(apiURL + '/users', {
                    headers: {
                        "Authorization": "Bearer " + sessionStorage.getItem('jwt'),
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const usersData = await response.json();
                    setUsers(usersData.users);
                    setLoading(false);
                } else {
                    console.error('Failed to fetch users:', response);

                }
            } catch (error) {
                console.error('Error fetching users data', error);
            }
        }

        fetchUsers().then();
    }, [refresh]);

    const handlePromote = async (username) => {
        try {
            let response = await fetch(apiURL + '/users/' + username + '/makeAdmin', {
                method: 'PUT',
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                console.log('User updated successfully!');
                alert('User updated successfully!');
                setRefresh(!refresh);
            }else{
                console.error('Failed to update user:', response);
                alert('Failed to update user.');
            }
        }catch (e) {
            console.error('Error:', e);
            alert('Failed to update user.');
        }
    }

    const enableUser = async (username) => {
        try {
            let response = await fetch(apiURL + '/users/' + username, {
                method: 'PATCH',
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                console.log('User re-enabled successfully!');
                alert('User re-enabled successfully!');
                setRefresh(!refresh);
            }else{
                console.error('Failed to re-enable user:', response);
                alert('Failed to re-enable user.');
            }
        }catch (e) {
            console.error('Error:', e);
            alert('Failed to re-enable user.');
        }
    }
    const disableUser = async (username) => {
        try {
            let response = await fetch(apiURL + '/users/' + username, {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                console.log('User disabled successfully!');
                alert('User disabled successfully!');
                setRefresh(!refresh);
            }else{
                console.error('Failed to disable user:', response);
                alert('Failed to disable user.');
            }
        }catch (e) {
            console.error('Error:', e);
            alert('Failed to disable user.');
        }
    }

    return (
        <center className={"text-white"}>
        <h1>Users</h1>
        <table className={"table table-dark"}>
            <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Disable</th>
            </tr>
            </thead>
            <tbody>
            {loading && (
                <tr>
                    <td colSpan={4}>Loading...</td>
                </tr>
            )}
            {!loading && users.map(user => (
                <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    {user.status === 'disabled' ? (
                        <>
                        <td>Disabled</td>
                        <td><button className={"btn btn-warning"} onClick={() => enableUser(user.username)}>Re-enable</button> </td>
                        </>
                    ) : (
                        <>
                        <td>{user.type === "admin" ? "Admin" :
                            getIsAdmin() ? <button className='btn btn-primary' onClick={() => handlePromote(user.username)}>Make Admin</button> : (
                                <>Not an admin</>
                            )}

                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={() => disableUser(user.username)}>Disable</button>
                        </td>
                        </>
                    )}
                </tr>
            ))}

            </tbody>
        </table>
        </center>
    );
}

export default Users;