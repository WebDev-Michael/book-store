import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
import Home from "./Home";
import BookStore from "./BookStore";
import Bookshelf from "./Bookshelf";
import Favorites from "./Favorites";
import Login from "./Login";


            
const Root = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-lightgray sticky-top">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand bold">
             Virtual Bookshelf
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/bookstore" class="nav-link" aria-current="page">
                    Book Store
                  </Link>
                </li>
                <li class="nav-item hide">
                  <Link to="/bookshelf" class="nav-link" aria-current="page">
                    Book Shelf
                  </Link>
                </li>
                <li class="nav-item hide">
                  <Link to="/favorites" class="nav-link" aria-current="page">
                    Favorites
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/login" class="nav-link" aria-current="page">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>       
      </header>
    </>
  );
};

export default function Navigation () {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/bookstore" element={<BookStore />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/bookshelf" element={<Bookshelf />} />
                <Route path="/login" element={<Login />} />
              </Route>
            )
            );
            return (
                <div>
                  <RouterProvider router={router} />
                </div>
              );
        }