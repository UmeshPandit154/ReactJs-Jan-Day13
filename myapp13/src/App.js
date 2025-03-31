
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Layout from "./components/ui/Layout";
export default function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<NoPage/>}></Route>
         </Routes>
    </BrowserRouter>
  )
}
