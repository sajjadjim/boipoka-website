import React from "react";
import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ABout from "../Pages/About/ABout";
import BookDetails from "../Pages/BookDetails/BookDetails";

  
export const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
      {
        index:true,
        path:'/',
        loader: () =>
          fetch("https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/bookData.json")
          .then(res => res.json())
          ,
        Component:Home,
      },
      {
        path:'about',
        Component:ABout
      },
      {
        path:'/bookDetails/:id',
        loader: () =>
          fetch("https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/bookData.json")
          .then(res => res.json())
          ,
        Component:BookDetails,
      }
     ]
    },
  ]);

