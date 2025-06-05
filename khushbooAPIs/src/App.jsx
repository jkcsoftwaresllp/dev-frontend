import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" style={{padding:"35px"}} >Register</Link>
        <Link to="/users">User List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
