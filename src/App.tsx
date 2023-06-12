import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Main from "./layouts/Main";
import { logoutAction } from "./actions/logout";
import { mainLoader } from "./loaders/main";
import { dashboardLoader } from "./loaders/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dashboardAction } from "./actions/dashboard";
import Expenses from "./pages/Expenses";
import { expensesLoader } from "./loaders/expenses";
import { expensesAction } from "./actions/expenses";
import Budget from "./pages/Budget";
import { budgetLoader } from "./loaders/budget";
import { budgetAction } from "./actions/budget";
import deleteBudget from "./actions/deleteBudget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <p>About</p>,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <Expenses />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <Budget />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
export default App;
