import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shear/Loading';
import UserRow from './UserRow';

const User = () => {
    const {data:users,isLoading ,refetch} = useQuery('users',()=> fetch('http://localhost:5000/user',{
        method:'GET',
        // headers:{
        //     authorization:`Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="divider">Email</div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        
        <th></th>
        <th>Name</th>
        <th>Role Create</th>
        <th>User Remove</th>
      </tr>
    </thead>
    <tbody>
     
      {
          users.map(user=> <UserRow key={user._id}
          user={user}
          refetch={refetch}
          isLoading={isLoading}
          ></UserRow>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;