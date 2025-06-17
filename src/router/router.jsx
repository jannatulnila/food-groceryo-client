import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayouts from '../layouts/RootLayouts';
import Register from '../Register/Register';
import Login from '../pages/Login/Login';
import Home from '../pages/Home';
import AddFood from '../pages/AddFood/AddFood';
import FoodDetails from '../pages/FoodDetails/FoodDetails';
import MyItems from '../Components/MyItems';
import PrivateRoute from '../PrivateRoute';
import ExpairedFoodSection from '../Components/ExpairedFoodSection/ExpairedFoodSection';
import Fridge from '../pages/Fridge/Fridge';
import NearlyExpairySection from '../Components/NearlyExpairySection/NearlyExpairySection';
import Spinner from '../pages/loading';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/fridge',
        Component: Fridge,
      },
      {
        path: 'add-food',
        element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/foods/:id',
       element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/my-foods/:email',
        element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
      },
    ]
  },
  {
        path: "/*",
        Component: ErrorPage
    }
]);

export default router;