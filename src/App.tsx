import { Route, Routes, useNavigate } from "react-router-dom"
import { useAppSelector } from "./app/hooks"
import LoginPage from "./pages/LoginPage"
import UserPage from "./pages/UserPage"

const App = () => {
  const { auth } = useAppSelector(s => s.userSlice)
  
  return (
    <div className="App container">
      {
        auth ? <UserPage/> : <LoginPage/>
      }
    </div>
  )
  
}

export default App
