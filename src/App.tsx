import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FeedbackList } from "./components/FeedbackList"
import { Login } from "./components/Login"
import { ThemeButton } from "./components/ThemeButton"
import { Widget } from "./components/Widget"
import { ThemeContextProvider } from "./context/themeContext"

function App() {

  return (
      <BrowserRouter>
      <ThemeContextProvider>
        <ThemeButton/>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<FeedbackList />} />
          <Route path="/widget" element={<Widget />} />

        </Routes>
      </ThemeContextProvider>
      </BrowserRouter>
  )

}

export default App
