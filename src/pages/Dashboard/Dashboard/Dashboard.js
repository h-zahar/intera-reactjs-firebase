import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import DashHeader from '../DashHeader/DashHeader';
import Pay from '../DashPages/Users/Pay/Pay';
import MyOrders from '../DashPages/Users/MyOrders/MyOrders/MyOrders';
import MyReviews from '../DashPages/Users/MyReview/MyReview';
import DashHome from '../DashPages/DashHome/DashHome';

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
          <DashHeader url={url} />
          
          <Switch>
              <Route exact path={`${path}`}>
                <DashHome />
              </Route>
              <Route path={`${path}/orders`}>
                  <MyOrders />
              </Route>

              <Route path={`${path}/review`}>
                  <MyReviews />
              </Route>

              <Route path={`${path}/pay`}>
                  <Pay />
              </Route>
          </Switch>
        </>
    )
}

export default Dashboard;