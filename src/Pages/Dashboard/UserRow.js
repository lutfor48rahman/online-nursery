import React from 'react';
import Loading from '../Shear/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({ user, isLoading, refetch }) => {
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(user.email);
    const { _id, email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`Faild to make an admin`);
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    refetch();
                    toast.success(`Make an Admin role`);
                }
            })
    }
    return (

        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;