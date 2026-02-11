import { useEffect, useState } from "react";
import API from "../api";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

function Attendance() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAttendance = async () => {
    try {
      const response = await API.get("attendance/");
      setAttendanceRecords(response.data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
  <div className="page-container">
    <h1>Attendance</h1>

    <div className="card">
      <AttendanceForm refreshAttendance={fetchAttendance} />
    </div>

    <div className="card">
      <AttendanceList
        attendanceRecords={attendanceRecords}
        loading={loading}
      />
    </div>
  </div>
);

}

export default Attendance;
