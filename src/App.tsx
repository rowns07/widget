import { AuthProvider } from "./context/authContext"
import { ThemeContextProvider } from "./context/themeContext"
import Routes from "./routes"

function App() {

  return (

    <ThemeContextProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeContextProvider>
  )

}

export default App
