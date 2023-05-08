import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <header>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/tweets" className={css.link}>
            Tweets
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer
        style={{
          display: "flex",
          // gap: 30,
          alignItems: "center",
          paddingLeft: 50,
          height: 50,
          background:
            "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
          boxShadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
          fontSize: "large",
          fontWeight: 700,
          color: "#EBD8FF",
        }}
      ></footer>
    </div>
  );
};

export default SharedLayout;
