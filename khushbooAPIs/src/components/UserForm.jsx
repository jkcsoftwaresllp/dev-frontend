import { useState } from "react";
import axios from "axios";

const UserForm = ({ onUserAdded }) => {
  const [form, setForm] = useState({ name: "", email: "", username: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users", form);
      console.log("User Registered:", res.data);
      onUserAdded(res.data);
      setForm({ name: "", email: "", username: "" });
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register New User</h3>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      /><br /><br />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      /><br /><br />
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
