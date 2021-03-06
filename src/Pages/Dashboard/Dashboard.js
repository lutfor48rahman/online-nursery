import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className=' hover:bg-slate-400'><Link to='/dashboard'>My Review</Link></li>
      <li className=' hover:bg-slate-400'><Link to='/dashboard/addProduct'>Add Product</Link></li>
      <li className=' hover:bg-slate-400'><Link to='/dashboard/addBlog'>Blog Add</Link></li>
      {/* <li className=' hover:bg-slate-400'><Link to='/dashboard/stock'>Stock Product</Link></li> */}
      <li className=' hover:bg-slate-400'><Link to='/dashboard/user'>Users</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;