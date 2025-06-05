import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

const RegisterUser = () => {
  const navigate = useNavigate();

  const handleUserAdded = (newUser) => {
    navigate("/users", { state: { newUser } });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <UserForm onUserAdded={handleUserAdded} />
    </div>
  );
};

export default RegisterUser;
