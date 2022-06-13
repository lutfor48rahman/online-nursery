import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Authentication/Login/Login';
import Signup from './Pages/Authentication/Signup/Signup';
import Home from './Pages/Home/Home';
import Orders from './Pages/Order/Orders';
import Shipment from './Pages/Shipment/Shipment';
// import Products from './Pages/Dashboard/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MyReview from './Pages/Dashboard/MyReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBlog from './Pages/Dashboard/AddBlog';
import Blog from './Pages/Blog/Blog';
import Stock from './Pages/Dashboard/Stock/Stock';
import User from './Pages/Dashboard/User';
import RequireAuth from './Pages/Authentication/RequierAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={<Shipment></Shipment>}></Route>
        <Route path='/viewBlog' element={<Blog></Blog>}></Route>
        {/* <Route path='/products' element={<Products></Products>}></Route> */}

        <Route path='/dashboard' element={
          <Dashboard></Dashboard>
        }>
          <Route index element={<MyReview></MyReview>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='addBlog' element={<AddBlog></AddBlog>}></Route>
          <Route path='stock' element={<Stock></Stock>}></Route>
          <Route path='user' element={<User></User>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
