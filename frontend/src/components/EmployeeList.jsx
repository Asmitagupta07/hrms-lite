import API from "../api";

function EmployeeList({ employees, refreshEmployees, loading }) {

  const handleDelete = async (id) => {
    try {
      await API.delete(`employees/${id}/`);
      refreshEmployees();
    } catch (error) {
      alert("Error deleting employee");
    }
  };

  if (loading) return <p>Loading employees...</p>;

  if (employees.length === 0) return <p>No employees found.</p>;

  return (
    <div>
      <h3>Employee List</h3>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.employee_id}</td>
              <td>{emp.full_name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
