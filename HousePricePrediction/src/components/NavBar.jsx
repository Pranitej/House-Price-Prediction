import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ page }) {
  return (
    <nav
      class="navbar bg-dark navbar-expand-sm border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          HousePriceCalculation
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              {page === "home" ? (
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              ) : (
                <Link class="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              )}
            </li>
            <li class="nav-item">
              {page === "about" ? (
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              ) : (
                <Link class="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              )}
            </li>
            <li class="nav-item">
              {page === "checkprice" ? (
                <Link class="nav-link active" to="/checkprice">
                  CheckPrice
                </Link>
              ) : (
                <Link class="nav-link" aria-current="page" to="/checkprice">
                  CheckPrice
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
