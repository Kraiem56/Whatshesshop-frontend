import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {UserEditScreen,ProductEditScreen } from "./Admin/index"
import {Footer,Header,PlaceOrder,ProductDetails} from "./components/index"
import {Home , OrderListScreen , ProductListScreen , UserListScreen } from "./containers/index"
import { OrderScreen , PaymentAddress ,ProfileScreen,ShipingAddress,SignScreen,Register, Cart } from "./screens/index"




export default class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ history, match }) => (
            <Header history={history} match={match} />
          )}
        />
        <div style={{ minHeight: "80vh" }}>
          <Route path='/login' component={SignScreen} />
          <Route path='/register' component={Register} />
          <Route path='/shipping' component={ShipingAddress} />
          <Route path='/payment' component={PaymentAddress} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/productslist' component={ProductListScreen} />
          <Route path='/orderslist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={Home} exact />
          <Route path='/page/:pageNumber' component={Home} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={Home}
            exact
          />
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductDetails} exact />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} exact />
          <Route
            path='/admin/product/:id/edit'
            component={ProductEditScreen}
            exact
          />
          <Route path='/cart/:id?' component={Cart} />
        </div>
        <Footer />
      </Router>
    );
  }
}
