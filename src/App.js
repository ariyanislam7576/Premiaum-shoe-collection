import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import AddReview from './Pages/Home/Drawer/AddReview/AddReview';
import ResponsiveDrawer from './Pages/Home/Drawer/Drawer/Drawer';
import MyOrder from './Pages/Home/Drawer/MyOrder/MyOrder';
import Pay from './Pages/Home/Drawer/Pay/Pay';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Home/Home/Register/Register';
import Login from './Pages/Home/Login/Login';
import MakeAdmin from './Pages/Home/MakeAdmin/MakeAdmin';
import ManageOrder from './Pages/Home/ManageOrder/ManageOrder';
import ManageProduct from './Pages/Home/ManageProduct/ManageProduct';
import MoreProduct from './Pages/Home/MoreProduct/MoreProduct';
import MoreReview from './Pages/Home/MoreReview/MoreReview';
import NavBar from './Pages/Home/Navabar/NavBar';
import NotFound from './Pages/Home/NotFound/NotFound';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <PrivateRoute exact path='/'>
              <Home></Home>
            </PrivateRoute>
            <PrivateRoute path='/home'>
              <Home></Home>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/dashboard'>
              <ResponsiveDrawer></ResponsiveDrawer>
            </PrivateRoute>
            <PrivateRoute path='/placeorder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>
            <Route path='/myorder'>
              <MyOrder></MyOrder>
            </Route>
            <Route path='/addreview'>
              <AddReview></AddReview>
            </Route>
            <Route path='/manageorder'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route path='/manageproduct'>
              <ManageProduct></ManageProduct>
            </Route>
            <Route path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path='/addproduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/moreproduct'>
              <MoreProduct></MoreProduct>
            </Route>
            <Route path='/morereview'>
              <MoreReview></MoreReview>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
