function AttendanceList({ attendanceRecords, loading }) {

  if (loading) return <p>Loading attendance...</p>;

  if (attendanceRecords.length === 0)
    return <p>No attendance records found.</p>;

  return (
    <div>
      <h3>Attendance Records</h3>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.employee_id}</td>
              <td>{record.employee_name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceList;
