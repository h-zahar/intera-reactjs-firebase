import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import DashHeader from '../DashHeader/DashHeader';
import Pay from '../DashPages/Users/Pay/Pay';
import MyOrders from '../DashPages/Users/MyOrders/MyOrders/MyOrders';
import MyReviews from '../DashPages/Users/MyReview/MyReview';
import ManageOrders from '../DashPages/Admins/ManageOrders/ManageOrders/ManageOrders';
import ManageProducts from '../DashPages/Admins/ManageProducts/ManageProducts/ManageProducts';
import AddProduct from '../DashPages/Admins/AddProduct/AddProduct';
import MakeAdmin from '../DashPages/Admins/MakeAdmin/MakeAdmin';
import DashHome from '../DashPages/DashHome/DashHome';
import NotFound from '../../NotFound/NotFound';
import AdminRoute from '../../AdminRoute/AdminRoute';

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
          <DashHeader url={url} />
          
          <Switch>

              <Route exact path={`${path}`}>
                <DashHome />
              </Route>

              <Route exact path={`${path}/user/orders`}>
                  <MyOrders />
              </Route>

              <Route exact path={`${path}/user/review`}>
                  <MyReviews />
              </Route>

              <Route exact path={`${path}/user/pay`}>
                  <Pay />
              </Route>

              <AdminRoute exact path={`${path}/admin/all-orders`}>
                  <ManageOrders />
              </AdminRoute>

              <AdminRoute exact path={`${path}/admin/products`}>
                  <ManageProducts />
              </AdminRoute>

              <AdminRoute exact path={`${path}/admin/add-product`}>
                  <AddProduct />
              </AdminRoute>

              <AdminRoute exact path={`${path}/admin/make-admin`}>
                  <MakeAdmin />
              </AdminRoute>

              <Route path='*'>
                <NotFound />
              </Route>

          </Switch>
        </>
    )
}

export default Dashboard;