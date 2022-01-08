import React, { Fragment } from "react";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topBar/TopBar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductsList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(state => state.user.currentUser.isAdmin);
  return (
    <Router>

      {user ?
        <Fragment>
          <TopBar />
          {/* Other pages Section  */}
          <div className="container">
            {/* SideBar Section  */}
            <SideBar />
            <Routes>
              {/* Home Section  */}
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </Fragment>
        :
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      }
    </Router>
  );
}



export default App;
