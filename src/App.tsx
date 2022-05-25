import { Route } from "react-router-dom"
import AuthContext, { AuthProvider } from "./context/auth"
import { ThemeContextProvider } from "./context/themeContext"
import Routes from "./routes"

function App() {

  return (
    // <BrowserRouter>
    //   <ThemeContextProvider>
    //     <Menu />
    //     <ThemeButton />

    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/list" element={<FeedbackList />} />
    //       <Route path="/widget" element={<Widget />} />

    //     </Routes>
    //   </ThemeContextProvider>
    // </BrowserRouter>

    <AuthProvider>
      <Routes />
    </AuthProvider>
  )

}

export default App
