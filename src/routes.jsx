import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterStep1 from "./pages/RegisterStep1"
import ForgotPassword from "./pages/ForgotPassword";
import Error404 from "./pages/Error404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterStep1 />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
