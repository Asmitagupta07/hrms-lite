import { useEffect, useState } from "react";
import API from "../api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await API.get("employees/");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
  <div className="page-container">
    <h1>Employees</h1>

    <div className="card">
      <EmployeeForm refreshEmployees={fetchEmployees} />
    </div>

    <div className="card">
      <EmployeeList
        employees={employees}
        refreshEmployees={fetchEmployees}
        loading={loading}
      />
    </div>
  </div>
);

}

export default Employees;
