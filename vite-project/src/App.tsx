import { BrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavRoutes from "./components/NavRoutes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavRoutes/>      
    </BrowserRouter>
  )
}

export default App
