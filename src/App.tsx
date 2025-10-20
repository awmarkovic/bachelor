import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  NavLink,
  Outlet,
} from "react-router";
import { About } from "./pages/About";
import { Knowledge } from "./pages/Knowledge";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/knowledge",
          element: <Knowledge />,
        },
      ],
    },
  ],
  {
    basename: "/bachelor/",
  }
);

// Legge til en not found side?

function Layout() {
  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <nav className="nav">
            <NavLink
              to="/"
              className={(state) => (state.isActive ? "active" : undefined)}
            >
              Om oss
            </NavLink>
            <NavLink to="/knowledge">Hva vi kan</NavLink>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
