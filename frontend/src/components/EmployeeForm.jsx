import { useState } from "react";
import API from "../api";

function EmployeeForm({ refreshEmployees }) {
  const [formData, setFormData] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("employees/", formData);
      setFormData({
        employee_id: "",
        full_name: "",
        email: "",
        department: ""
      });
      refreshEmployees();
    } catch (err) {
      setError("Error adding employee.");
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Add Employee</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employee_id"
          placeholder="Employee ID"
          value={formData.employee_id}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
