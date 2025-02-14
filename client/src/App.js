import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./views/Home/Home";
import Reservation from "./views/Resevation/Reservation";
import Login from "./views/Login/Login";
import Review from "./views/Review/Review";
import Dashboard from "./views/Dashboard/Dashboard";
import Contact from "./views/Contact/Contact";
import Payment from "./views/Payment/Payment";
import Admin from "./views/Admin/Admin";
import AloginPage from "./views/Admin/AloginPage";
import Shopping from "./views/Shopping/Shopping"
import Chatbot from "./views/Chatbot/Chatbot"
import Calculator from "./views/Calculator/Calculator";
import Signup from "./views/Signup/Signup";
// import AdminLogin from "./views/Admin/AdminLogin"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/review",
      element: <Review/>
    },

    {
      path: "/reservation",
      element: <Reservation/>
    },
    
    {
      path: "/chatbot",
      element: <Chatbot/>
    },
    {
      path: "/admin",
      element: <Admin/>
    },
    {
      path: "/payment",
      element: <Payment/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path:"/shopping",
      element:<Shopping/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path: "/badmin",
      element : <AloginPage/>
    },
  ])

  return (
    <>
    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}
export default App;
