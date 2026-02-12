import { useState, useEffect } from "react";
import API from "../api";

function AttendanceForm({ refreshAttendance }) {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    status: "Present"
  });

  const [error, setError] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await API.get("employees/");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("attendance/", formData);
      setFormData({
        employee: "",
        date: "",
        status: "Present"
      });
      refreshAttendance();
    }catch (error) {
  if (error.response && error.response.data) {
    const errorData = error.response.data;

    if (errorData.non_field_errors) {
      setError(errorData.non_field_errors[0]);
    } else {
      setError("Error adding attendance.");
    }
  } else {
    setError("Something went wrong.");
  }
}

  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Mark Attendance</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <select
          name="employee"
          value={formData.employee}
          onChange={handleChange}
          required
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <br /><br />

        <button type="submit">Mark Attendance</button>
      </form>
    </div>
  );
}

export default AttendanceForm;
