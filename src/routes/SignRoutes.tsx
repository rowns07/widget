import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { Widget } from "../components/Widget";

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Widget />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Widget />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SignRoutes;